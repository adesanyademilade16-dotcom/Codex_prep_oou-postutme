// ===========================================================
// CODEX PREP — OOU SCREENING CONFIG
// Mock Exam unlocks 27 July 2026 (OOU_SCREENING_START below —
// this is the ONLY date that actually controls anything in the
// app). OOU_SCREENING_END and OOU_REGISTRATION_CLOSE below are
// just reference notes about the real OOU screening exercise —
// neither is read anywhere else in the code, so editing them
// doesn't change app behavior. Only OOU_SCREENING_START does.
//
// Full Mock Exam uses each faculty's real subject combination
// (per ASA tutorial combos + Codex's firsthand confirmation),
// not a generic placeholder — Government is listed where it's
// genuinely part of the combo even though we don't have Government
// content yet; the CBT engine skips missing subjects gracefully.
// ===========================================================

export const OOU_SCREENING_START = new Date('2026-07-27T00:00:00+01:00'); // WAT — change this line to adjust the countdown target
export const OOU_SCREENING_END = new Date('2026-08-08T23:59:59+01:00');
export const OOU_REGISTRATION_CLOSE = new Date('2026-07-22T23:59:59+01:00');

// Every course maps to one of 3 broad departments the student picks
// themselves: Science, Arts, or Commercial. Each department has a
// solid default combo, so an unrecognized course name never falls
// through to a generic placeholder — it always gets a real,
// department-appropriate combo. Specific course keywords can still
// override the default within a department where the real combo
// differs (e.g. Medicine needs Biology but not Maths; Law needs
// Government/Literature, not the general Arts combo).
export function getScreeningCombo(faculty, course) {
  const c = (course || '').toLowerCase();
  // Back-compat: map old faculty values (from before the department
  // simplification) onto the new 3-department system.
  const dept = { science: 'science', arts: 'arts', social_sciences: 'arts',
    education: null, agriculture: 'science', management_sciences: 'commercial',
    law: 'arts', commercial: 'commercial' }[faculty] ?? faculty;

  if (dept === 'science') {
    if (['medicine', 'pharmacy', 'nursing'].some(k => c.includes(k))) {
      return {
        subjects: ["PUTME_ENGLISH", "PUTME_PHYSICS", "PUTME_CHEMISTRY", "PUTME_BIOLOGY"],
        confidence: 'confirmed'
      };
    }
    if (c.includes('agric')) {
      return {
        subjects: ["PUTME_CHEMISTRY", "PUTME_BIOLOGY", "PUTME_ENGLISH", "PUTME_MATHEMATICS"],
        confidence: 'estimated'
      };
    }
    // Default for ANY other science-department course (Computer Science,
    // Engineering, unlisted courses, Education courses the student filed
    // under Science, etc.) — the full 5-subject combo.
    return {
      subjects: ["PUTME_MATHEMATICS", "PUTME_ENGLISH", "PUTME_PHYSICS", "PUTME_CHEMISTRY", "PUTME_BIOLOGY"],
      confidence: 'confirmed'
    };
  }

  if (dept === 'commercial') {
    // Default for ANY commercial-department course (Accounting, Business
    // Admin, Banking & Finance, Economics, unlisted courses, etc.)
    return {
      subjects: ["PUTME_GOVERNMENT", "PUTME_ECONOMICS", "PUTME_MATHEMATICS", "PUTME_ENGLISH"],
      confidence: 'confirmed'
    };
  }

  if (dept === 'arts') {
    if (c.includes('law')) {
      return {
        subjects: ["PUTME_GOVERNMENT", "PUTME_LITERATURE", "PUTME_CRK", "PUTME_ENGLISH"],
        confidence: 'estimated'
      };
    }
    // Default for ANY other arts-department course (Literature, CRK,
    // Theatre Arts, Education courses filed under Arts, unlisted, etc.)
    // TEMP: using CRS in place of Mathematics until Codex confirms which
    // one is actually correct for the general Arts combo.
    return {
      subjects: ["PUTME_GOVERNMENT", "PUTME_LITERATURE", "PUTME_ECONOMICS", "PUTME_CRK", "PUTME_ENGLISH"],
      confidence: 'estimated'
    };
  }

  // Only reached if faculty is missing/unrecognized entirely (shouldn't
  // happen once the dropdown only offers science/arts/commercial).
  return {
    subjects: ["PUTME_ENGLISH", "PUTME_MATHEMATICS"],
    confidence: 'estimated'
  };
}

// 50 questions total, split as evenly as possible across however many
// subjects are in the combo (4 or 5 depending on faculty).
export function getScreeningCounts(subjectCount){
  const base = Math.floor(50 / subjectCount);
  const remainder = 50 % subjectCount;
  const counts = [];
  for (let i = 0; i < subjectCount; i++) {
    counts.push(base + (i < remainder ? 1 : 0));
  }
  return counts;
}

export function getCountdown(targetDate) {
  const now = new Date();
  const diffMs = targetDate.getTime() - now.getTime();
  if (diffMs <= 0) return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const totalSeconds = Math.floor(diffMs / 1000);
  return {
    done: false,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}
