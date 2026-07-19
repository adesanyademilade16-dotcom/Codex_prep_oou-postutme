// ===========================================================
// CODEX PREP — OOU SCREENING CONFIG
// Registration closes 22 July 2026; screening runs 3-8 Aug 2026,
// with each candidate assigned a specific day/time on their pass.
//
// Full Mock Exam uses each faculty's real subject combination
// (per ASA tutorial combos + Codex's firsthand confirmation),
// not a generic placeholder — Government is listed where it's
// genuinely part of the combo even though we don't have Government
// content yet; the CBT engine skips missing subjects gracefully.
// ===========================================================

export const OOU_SCREENING_START = new Date('2026-07-19T00:00:00+01:00'); // WAT — change this line to adjust the countdown target
export const OOU_SCREENING_END = new Date('2026-08-08T23:59:59+01:00');
export const OOU_REGISTRATION_CLOSE = new Date('2026-07-22T23:59:59+01:00');

// Confidence levels: 'confirmed' (verified against Codex's firsthand
// experience or explicit ASA tutorial combo) vs 'estimated' (best-guess
// default, shown with a "does this look right?" prompt).
//
// PUTME_GOVERNMENT is listed where it's genuinely part of the real combo
// even though we have no Government question bank yet — the CBT engine
// already handles missing subjects gracefully (skips them, shows a note),
// so the combo shown to students stays honest about what SHOULD be there.
export function getScreeningCombo(faculty, course) {
  const c = (course || '').toLowerCase();

  if (faculty === 'science') {
    if (['medicine', 'pharmacy', 'nursing'].some(k => c.includes(k))) {
      return {
        subjects: ["PUTME_ENGLISH", "PUTME_PHYSICS", "PUTME_CHEMISTRY", "PUTME_BIOLOGY"],
        confidence: 'confirmed'
      };
    }
    // All other science/lab courses (Computer Science, Engineering, etc.)
    // do the full 5-subject combo including Mathematics.
    return {
      subjects: ["PUTME_MATHEMATICS", "PUTME_ENGLISH", "PUTME_PHYSICS", "PUTME_CHEMISTRY", "PUTME_BIOLOGY"],
      confidence: 'confirmed'
    };
  }

  if (faculty === 'management_sciences') {
    return {
      subjects: ["PUTME_GOVERNMENT", "PUTME_ECONOMICS", "PUTME_MATHEMATICS", "PUTME_ENGLISH"],
      confidence: 'confirmed'
    };
  }

  if (faculty === 'arts') {
    if (c.includes('law')) {
      return {
        subjects: ["PUTME_GOVERNMENT", "PUTME_LITERATURE", "PUTME_ENGLISH"],
        confidence: 'estimated'
      };
    }
    // TEMP: using CRS in place of Mathematics until Codex confirms which
    // one is actually correct for the general Arts combo.
    return {
      subjects: ["PUTME_GOVERNMENT", "PUTME_LITERATURE", "PUTME_ECONOMICS", "PUTME_CRK", "PUTME_ENGLISH"],
      confidence: 'estimated'
    };
  }

  if (faculty === 'agriculture') {
    return {
      subjects: ["PUTME_CHEMISTRY", "PUTME_BIOLOGY", "PUTME_ENGLISH", "PUTME_MATHEMATICS"],
      confidence: 'estimated'
    };
  }

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
