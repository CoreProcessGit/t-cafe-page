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

export const guideCategories = [
  {
    title: '시작하기',
    items: [
      { slug: 'getting-started', title: '01. 시작하기', component: GettingStarted },
      { slug: 'permissions', title: '02. 사용자 권한', component: Permissions },
    ],
  },
  {
    title: 'Overview',
    items: [
      { slug: 'overview-dashboard', title: '03. Overview 대시보드', component: OverviewDashboard },
      { slug: 'board', title: '04. 게시판 (Board)', component: Board },
    ],
  },
  {
    title: 'Test Cases',
    items: [
      { slug: 'test-cases', title: '05. 테스트 케이스 기본 사용법', component: TestCases },
      { slug: 'test-cases-folders', title: '06. 폴더 관리', component: Folders },
      { slug: 'test-cases-steps', title: '07. 테스트 스텝 작성', component: Steps },
      { slug: 'factor-combination', title: '08. Factor Combination', component: FactorCombination },
      { slug: 'import-export', title: '09. Import / Export', component: ImportExport },
    ],
  },
  {
    title: 'Test Plans',
    items: [
      { slug: 'test-plans', title: '10. 테스트 플랜 관리', component: TestPlans },
      { slug: 'test-execution', title: '11. 테스트 실행', component: TestExecution },
    ],
  },
  {
    title: 'Test Reports',
    items: [
      { slug: 'test-reports', title: '12. 테스트 리포트', component: TestReports },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { slug: 'configuration', title: '13. Configuration (설정)', component: Configuration },
    ],
  },
  {
    title: 'Attachments',
    items: [
      { slug: 'attachments', title: '14. 첨부파일', component: Attachments },
    ],
  },
  {
    title: '부록',
    items: [
      { slug: 'faq', title: '15. 자주 묻는 질문 (FAQ)', component: FAQ },
    ],
  },
];

export const guideMap = Object.fromEntries(
  guideCategories.flatMap((c) => c.items.map((i) => [i.slug, i]))
);

export const DEFAULT_GUIDE_SLUG = 'getting-started';
