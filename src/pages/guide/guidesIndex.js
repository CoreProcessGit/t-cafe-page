import GettingStarted from './01-getting-started';
import Permissions from './02-permissions';
import TestCases from './03-test-cases';
import Folders from './04-test-cases-folders';
import Steps from './05-test-cases-steps';
import FactorCombination from './06-factor-combination';
import TestPlans from './07-test-plans';
import TestExecution from './08-test-execution';
import TestReports from './09-test-reports';
import Configuration from './10-configuration';
import ImportExport from './11-import-export';
import Attachments from './12-attachments';
import Board from './13-board';
import OverviewDashboard from './14-overview-dashboard';
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
    title: '테스트 케이스',
    items: [
      { slug: 'test-cases', title: '03. 테스트 케이스 기본 사용법', component: TestCases },
      { slug: 'test-cases-folders', title: '04. 폴더 관리', component: Folders },
      { slug: 'test-cases-steps', title: '05. 테스트 스텝 작성', component: Steps },
    ],
  },
  {
    title: 'Factor Combination',
    items: [
      { slug: 'factor-combination', title: '06. Factor Combination', component: FactorCombination },
    ],
  },
  {
    title: '테스트 플랜과 실행',
    items: [
      { slug: 'test-plans', title: '07. 테스트 플랜 관리', component: TestPlans },
      { slug: 'test-execution', title: '08. 테스트 실행', component: TestExecution },
      { slug: 'test-reports', title: '09. 테스트 리포트', component: TestReports },
    ],
  },
  {
    title: '관리자',
    items: [
      { slug: 'configuration', title: '10. Configuration (설정)', component: Configuration },
      { slug: 'import-export', title: '11. Import / Export', component: ImportExport },
      { slug: 'attachments', title: '12. 첨부파일', component: Attachments },
      { slug: 'board', title: '13. 게시판 (Board)', component: Board },
      { slug: 'overview-dashboard', title: '14. Overview 대시보드', component: OverviewDashboard },
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
