import GettingStarted from './01-getting-started';
import Permissions from './02-permissions';
import OverviewDashboard from './03-overview-dashboard';
import Board from './04-board';
import TestCases from './05-test-cases';
import Folders from './06-test-cases-folders';
import Steps from './07-test-cases-steps';
import FactorCombination from './08-factor-combination';
import ImportExport from './09-import-export';
import TestPlans from './10-test-plans';
import TestExecution from './11-test-execution';
import TestReports from './12-test-reports';
import Configuration from './13-configuration';
import Attachments from './14-attachments';
import FAQ from './15-faq';

export const SUPPORTED_LANGS = ['ko', 'en'];
export const DEFAULT_LANG = 'en';

export const guideCategories = [
  {
    titles: { ko: '시작하기', en: 'Getting Started' },
    items: [
      { slug: 'getting-started', titles: { ko: '01. 시작하기', en: '01. Getting Started' }, components: GettingStarted },
      { slug: 'permissions', titles: { ko: '02. 사용자 권한', en: '02. User Permissions' }, components: Permissions },
    ],
  },
  {
    titles: { ko: 'Overview', en: 'Overview' },
    items: [
      { slug: 'overview-dashboard', titles: { ko: '03. Overview 대시보드', en: '03. Overview Dashboard' }, components: OverviewDashboard },
      { slug: 'board', titles: { ko: '04. 게시판 (Board)', en: '04. Board' }, components: Board },
    ],
  },
  {
    titles: { ko: 'Test Cases', en: 'Test Cases' },
    items: [
      { slug: 'test-cases', titles: { ko: '05. 테스트 케이스 기본 사용법', en: '05. Test Case Basics' }, components: TestCases },
      { slug: 'test-cases-folders', titles: { ko: '06. 폴더 관리', en: '06. Folder Management' }, components: Folders },
      { slug: 'test-cases-steps', titles: { ko: '07. 테스트 스텝 작성', en: '07. Writing Test Steps' }, components: Steps },
      { slug: 'factor-combination', titles: { ko: '08. Factor Combination', en: '08. Factor Combination' }, components: FactorCombination },
      { slug: 'import-export', titles: { ko: '09. Import / Export', en: '09. Import / Export' }, components: ImportExport },
    ],
  },
  {
    titles: { ko: 'Test Plans', en: 'Test Plans' },
    items: [
      { slug: 'test-plans', titles: { ko: '10. 테스트 플랜 관리', en: '10. Test Plan Management' }, components: TestPlans },
      { slug: 'test-execution', titles: { ko: '11. 테스트 실행', en: '11. Test Execution' }, components: TestExecution },
    ],
  },
  {
    titles: { ko: 'Test Reports', en: 'Test Reports' },
    items: [
      { slug: 'test-reports', titles: { ko: '12. 테스트 리포트', en: '12. Test Reports' }, components: TestReports },
    ],
  },
  {
    titles: { ko: 'Configuration', en: 'Configuration' },
    items: [
      { slug: 'configuration', titles: { ko: '13. Configuration (설정)', en: '13. Configuration' }, components: Configuration },
    ],
  },
  {
    titles: { ko: 'Attachments', en: 'Attachments' },
    items: [
      { slug: 'attachments', titles: { ko: '14. 첨부파일', en: '14. Attachments' }, components: Attachments },
    ],
  },
  {
    titles: { ko: '부록', en: 'Appendix' },
    items: [
      { slug: 'faq', titles: { ko: '15. 자주 묻는 질문 (FAQ)', en: '15. Frequently Asked Questions (FAQ)' }, components: FAQ },
    ],
  },
];

export const guideMap = Object.fromEntries(
  guideCategories.flatMap((c) => c.items.map((i) => [i.slug, i]))
);

export const DEFAULT_GUIDE_SLUG = 'getting-started';

export const LAYOUT_TEXT = {
  sidebarTitle: { ko: '사용자 가이드', en: 'User Guide' },
  sidebarSubtitle: { ko: 'T-CAFE 사용 매뉴얼', en: 'T-CAFE User Manual' },
  showToc: { ko: '▸ 가이드 목차 보기', en: '▸ Show Table of Contents' },
  hideToc: { ko: '▾ 가이드 목차 숨기기', en: '▾ Hide Table of Contents' },
  notFoundTitle: { ko: '가이드를 찾을 수 없습니다', en: 'Guide Not Found' },
  notFoundBody: { ko: '요청하신 가이드 페이지가 존재하지 않습니다.', en: 'The requested guide page does not exist.' },
  goToStart: { ko: '시작하기 가이드로 이동', en: 'Go to Getting Started' },
  langKo: { ko: '한국어', en: '한국어' },
  langEn: { ko: 'English', en: 'English' },
};
