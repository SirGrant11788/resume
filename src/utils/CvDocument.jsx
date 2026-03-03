/**
 * CvDocument.jsx  — ATS/OCR-optimised PDF via @react-pdf/renderer
 *
 * Iteration research applied (3 passes):
 *
 *  Pass 1 — ATS parser behaviour (Workday, Greenhouse, Lever, iCIMS, Taleo):
 *    · Section headings: "PROFESSIONAL EXPERIENCE" / "TECHNICAL SKILLS" parse
 *      correctly where bare "Experience"/"Skills" may be mis-classified.
 *    · Keyword frequency boosts score: skills repeated across summary, skills
 *      section, and bullets all count.
 *    · Curly/smart quotes normalised to straight equivalents for older parsers.
 *
 *  Pass 2 — PDF template best practices:
 *    · Body font raised to 10 pt (9 pt is below human-readability threshold).
 *    · wrap={false} on each job/project block prevents orphaned headings.
 *    · LinkedIn URL displayed without https:// prefix (cleaner text extraction).
 *
 *  Pass 3 — Content gap audit:
 *    · projects[] (9 entries) was entirely absent — now included as KEY PROJECTS.
 *    · "Methodologies" label corrected to "Soft Skills".
 *    · "Languages" label expanded to "Programming Languages" for ATS clarity.
 */
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer'
import {
  personal,
  experience,
  skills,
  education,
  certifications,
  industryExposure,
  projects,
} from '../data/resume'

/**
 * Character sanitiser.
 * Helvetica uses Windows-1252. U+2192 (→) is not in that set.
 * Curly quotes/apostrophes are normalised for legacy ATS text extractors.
 */
const fx = (str = '') =>
  str
    .replace(/\u2192/g, '>')          // → not in Win-1252
    .replace(/[\u2018\u2019]/g, "'")  // curly single quotes
    .replace(/[\u201c\u201d]/g, '"')  // curly double quotes

// Display LinkedIn without protocol — cleaner ATS text extraction, still a link
const linkedinDisplay = personal.linkedin.replace(/^https?:\/\//, '')

const B = 'Helvetica-Bold'
const I = 'Helvetica-Oblique'

const s = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,             // raised from 9.5 → 10 (min recommended for readability)
    color: '#111111',
    paddingTop: 44,
    paddingBottom: 44,
    paddingLeft: 54,
    paddingRight: 54,
    lineHeight: 1.45,
  },

  /* ── Header ───────────────────────────────────────────────── */
  name:       { fontFamily: B, fontSize: 22, letterSpacing: 0.3, marginBottom: 2 },
  jobTitle:   { fontSize: 11, color: '#555555', marginBottom: 5 },
  contactRow: { flexDirection: 'row', flexWrap: 'wrap', fontSize: 8.5, color: '#555555', marginBottom: 9 },
  pipe:       { color: '#bbbbbb', marginHorizontal: 6 },
  link:       { color: '#1d4ed8', textDecoration: 'none' },
  rule:       { borderBottomWidth: 0.75, borderBottomColor: '#cccccc', marginBottom: 10 },

  /* ── Section heading ──────────────────────────────────────── */
  sectionTitle: {
    fontFamily: B,
    fontSize: 7.5,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#333333',
    borderBottomWidth: 0.5,
    borderBottomColor: '#cccccc',
    paddingBottom: 2,
    marginTop: 14,
    marginBottom: 7,
  },

  /* ── Professional Summary ─────────────────────────────────── */
  profileText: { fontSize: 9.5, color: '#333333', lineHeight: 1.55 },

  /* ── Professional Experience ──────────────────────────────── */
  expBlock:   { marginBottom: 11 },
  expTopRow:  { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 1 },
  expLeft:    { flex: 1, marginRight: 8 },
  expCompany: { fontFamily: B, fontSize: 10.5, color: '#111111' },
  expClient:  { fontSize: 10, color: '#222222', marginTop: 1 },
  expRole:    { fontFamily: I, fontSize: 9.5, color: '#555555', marginTop: 1, marginBottom: 3 },
  expPeriod:  { fontSize: 9, color: '#888888', textAlign: 'right' },
  expSummary: { fontSize: 9, color: '#333333', lineHeight: 1.5, marginBottom: 4, marginTop: 1 },
  bulletRow:  { flexDirection: 'row', marginBottom: 2.5 },
  bulletDot:  { width: 12, fontSize: 9.5, color: '#555555' },
  bulletText: { flex: 1, fontSize: 9, color: '#333333', lineHeight: 1.45 },
  stackLine:  { fontSize: 8, color: '#999999', marginTop: 3 },

  /* ── Technical Skills ─────────────────────────────────────── */
  skillRow:    { flexDirection: 'row', marginBottom: 4, alignItems: 'flex-start' },
  skillLabel:  { fontFamily: B, fontSize: 9, width: 135, color: '#333333' },
  skillValues: { flex: 1, fontSize: 9, color: '#444444', lineHeight: 1.45 },

  /* ── Key Projects ─────────────────────────────────────────── */
  projBlock:  { marginBottom: 8 },
  projTopRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 },
  projTitle:  { fontFamily: B, fontSize: 9.5, color: '#111111', flex: 1, marginRight: 8 },
  projType:   { fontSize: 8.5, color: '#888888', textAlign: 'right' },
  projDesc:   { fontSize: 8.5, color: '#333333', lineHeight: 1.45, marginBottom: 2 },
  projStack:  { fontSize: 8, color: '#999999' },

  /* ── Education ────────────────────────────────────────────── */
  eduBlock: { marginBottom: 6 },
  eduRow:   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  eduInst:  { fontFamily: B, fontSize: 10, color: '#111111' },
  eduYear:  { fontSize: 9, color: '#888888' },
  eduQual:  { fontSize: 9, color: '#444444', marginTop: 1 },

  /* ── Certifications & Licenses ────────────────────────────── */
  certBlock: { marginBottom: 5 },
  certTitle: { fontFamily: B, fontSize: 9.5, color: '#111111' },
  certSub:   { fontSize: 9, color: '#555555' },
})

export default function CvDocument() {
  return (
    <Document
      title={`${personal.name} - CV`}
      author={personal.name}
      subject="Curriculum Vitae - Senior Software Developer"
      keywords="senior software developer, full-stack, team lead, react, angular, vite, module federation, javascript, typescript, java, quarkus, c#, .net, node.js, docker, kubernetes, aws, eks, ecr, azure devops, postgresql, firebase, sonarqube, microservices, ci/cd, devops"
      creator={personal.name}
    >
      <Page size="A4" style={s.page}>

        {/* ── HEADER ─────────────────────────────────────────── */}
        <Text style={s.name}>{personal.name}</Text>
        <Text style={s.jobTitle}>{personal.title}</Text>
        <View style={s.contactRow}>
          <Text>{personal.email}</Text>
          <Text style={s.pipe}>|</Text>
          <Text>{personal.phone}</Text>
          <Text style={s.pipe}>|</Text>
          <Text>{personal.location}</Text>
          <Text style={s.pipe}>|</Text>
          <Link src={personal.linkedin} style={s.link}>{linkedinDisplay}</Link>
        </View>
        <View style={s.rule} />

        {/* ── PROFESSIONAL SUMMARY ───────────────────────────── */}
        <Text style={s.sectionTitle}>Professional Summary</Text>
        <Text style={s.profileText}>{fx(personal.tagline)}</Text>

        {/* ── PROFESSIONAL EXPERIENCE ────────────────────────── */}
        <Text style={s.sectionTitle}>Professional Experience</Text>
        {experience.map((exp) => (
          <View key={exp.id} style={s.expBlock} wrap={false}>
            <View style={s.expTopRow}>
              <View style={s.expLeft}>
                <Text style={s.expCompany}>{exp.company}</Text>
                {exp.client ? <Text style={s.expClient}>{fx(exp.client)}</Text> : null}
              </View>
              <Text style={s.expPeriod}>{exp.period}</Text>
            </View>
            <Text style={s.expRole}>{fx(exp.role)}</Text>
            {exp.summary ? <Text style={s.expSummary}>{fx(exp.summary)}</Text> : null}
            {exp.bullets.map((b, i) => (
              <View key={i} style={s.bulletRow}>
                <Text style={s.bulletDot}>{'\u2022'}</Text>
                <Text style={s.bulletText}>{fx(b)}</Text>
              </View>
            ))}
            {exp.stack && exp.stack.length > 0 && (
              <Text style={s.stackLine}>Stack: {exp.stack.join(', ')}</Text>
            )}
          </View>
        ))}

        {/* ── TECHNICAL SKILLS ───────────────────────────────── */}
        <Text style={s.sectionTitle}>Technical Skills</Text>
        <View style={s.skillRow}>
          <Text style={s.skillLabel}>Programming Languages:</Text>
          <Text style={s.skillValues}>{skills.languages.join(', ')}</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillLabel}>Frontend:</Text>
          <Text style={s.skillValues}>{skills.frontend.join(', ')}</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillLabel}>Backend & DevOps:</Text>
          <Text style={s.skillValues}>{skills.backendDevOps.join(', ')}</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillLabel}>Soft Skills:</Text>
          <Text style={s.skillValues}>{skills.softSkills.join(', ')}</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillLabel}>Industry Exposure:</Text>
          <Text style={s.skillValues}>{industryExposure.join(', ')}</Text>
        </View>

        {/* ── KEY PROJECTS ───────────────────────────────────── */}
        <Text style={s.sectionTitle}>Key Projects</Text>
        {projects.map((proj) => (
          <View key={proj.id} style={s.projBlock} wrap={false}>
            <View style={s.projTopRow}>
              <Text style={s.projTitle}>{fx(proj.title)}</Text>
              <Text style={s.projType}>{proj.type}</Text>
            </View>
            <Text style={s.projDesc}>{fx(proj.description)}</Text>
            {proj.stack && proj.stack.length > 0 && (
              <Text style={s.projStack}>Stack: {proj.stack.join(', ')}</Text>
            )}
          </View>
        ))}

        {/* ── EDUCATION ──────────────────────────────────────── */}
        <Text style={s.sectionTitle}>Education</Text>
        {education.map((edu) => (
          <View key={edu.id} style={s.eduBlock} wrap={false}>
            <View style={s.eduRow}>
              <Text style={s.eduInst}>{edu.institution}</Text>
              <Text style={s.eduYear}>{edu.year}</Text>
            </View>
            <Text style={s.eduQual}>{edu.qualification}</Text>
          </View>
        ))}

        {/* ── CERTIFICATIONS & LICENSES ──────────────────────── */}
        <Text style={s.sectionTitle}>Certifications & Licenses</Text>
        {certifications.map((cert) => (
          <View key={cert.id} style={s.certBlock} wrap={false}>
            <Text style={s.certTitle}>{cert.title}</Text>
            <Text style={s.certSub}>{fx(cert.issuer)}{' \u2014 '}{cert.year}</Text>
          </View>
        ))}

      </Page>
    </Document>
  )
}
