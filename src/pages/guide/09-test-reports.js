import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const TestReports = () => (
  <article className="guide-article">
    <h1>09. 테스트 리포트</h1>
    <p className="guide-lead">
      테스트 리포트는 TP의 실행 결과를 시각화하고 분석할 수 있는 페이지입니다. 의사결정과 품질 보고에 활용됩니다.
    </p>

    <hr />

    <h2>1. 리포트 진입</h2>
    <p>상단 탭 → <strong>Test Reports</strong></p>

    <ScreenshotSlot label="Test Reports 메인 화면" />

    <hr />

    <h2>2. 권한</h2>
    <table>
      <thead>
        <tr><th>권한</th><th className="center">조회</th><th className="center">Export</th></tr>
      </thead>
      <tbody>
        <tr><td>Admin</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>Team Admin</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td><strong>Tester</strong></td><td className="center"><strong>O</strong></td><td className="center"><strong>O</strong></td></tr>
        <tr><td><strong>Developer</strong></td><td className="center"><strong>O</strong></td><td className="center"><strong>O</strong></td></tr>
      </tbody>
    </table>
    <p>→ <strong>모든 역할이 리포트를 조회/Export할 수 있습니다</strong> (테스트 결과는 팀 전체에 투명하게 공유)</p>

    <hr />

    <h2>3. 리포트 종류</h2>

    <h3>3-1. TP 단위 리포트</h3>
    <p>선택한 TP의 실행 결과를 상세히 표시:</p>
    <ul>
      <li><strong>전체 통계</strong>: Pass / Fail / Block / Skip / Not Yet</li>
      <li><strong>진행률</strong>: 0~100%</li>
      <li><strong>시작/종료일</strong>: 일정과 실제 진행 비교</li>
      <li><strong>우선순위별 통계</strong>: Configuration → Priorities에서 정의된 모든 우선순위별 결과 (예: Critical / High / Medium / Low)</li>
      <li><strong>컴포넌트별 통계</strong>: Configuration → Components에서 정의된 모든 컴포넌트별 결과 (예: Frontend / Backend API / Database)</li>
      <li><strong>소유자별 통계</strong>: 누가 얼마나 실행했는지</li>
    </ul>

    <h3>3-2. 프로젝트 전체 리포트</h3>
    <p>프로젝트 내 모든 TP의 종합 통계:</p>
    <ul>
      <li>전체 TP 개수</li>
      <li>활성 TP / 완료 TP</li>
      <li>평균 진행률</li>
      <li>트렌드 (시간순)</li>
    </ul>

    <h3>3-3. 폴더 단위 리포트</h3>
    <p>특정 TP 폴더 안의 결과만:</p>
    <ul>
      <li>폴더별 Pass/Fail 비율</li>
      <li>가장 많이 실패한 폴더 식별</li>
    </ul>

    <hr />

    <h2>4. 차트와 시각화</h2>

    <h3>차트 종류</h3>
    <table>
      <thead>
        <tr><th>차트</th><th>용도</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>파이 차트</strong></td><td>전체 결과 비율 (Pass/Fail/Block/Skip)</td></tr>
        <tr><td><strong>막대 차트</strong></td><td>카테고리별 비교 (우선순위, 컴포넌트, 소유자 등)</td></tr>
        <tr><td><strong>선 차트</strong></td><td>시간순 트렌드 (일별 진행률)</td></tr>
        <tr><td><strong>누적 차트</strong></td><td>누적 실행 결과</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="리포트 차트" />

    <h3>색상 규칙</h3>
    <ul>
      <li>Pass: 녹색</li>
      <li>Fail: 빨강</li>
      <li>Block: 주황</li>
      <li>Skip: 노랑</li>
      <li>Not Yet: 회색</li>
    </ul>

    <hr />

    <h2>5. 리포트 필터</h2>

    <h3>필터 옵션</h3>
    <ul>
      <li><strong>TP 선택</strong>: 특정 TP만 보기</li>
      <li><strong>날짜 범위</strong>: 시작/종료일 기준</li>
      <li><strong>상태</strong>: 특정 상태만 (예: Fail만 모아 보기)</li>
      <li><strong>우선순위</strong>: Critical만 등</li>
      <li><strong>컴포넌트</strong>: Frontend만 등</li>
      <li><strong>소유자</strong>: 특정 사용자만</li>
    </ul>

    <h3>필터 조합</h3>
    <p>여러 필터를 동시에 적용 가능 (AND 조건)</p>

    <ScreenshotSlot label="리포트 필터" />

    <hr />

    <h2>6. 리포트 Export</h2>

    <h3>지원 형식</h3>
    <ul>
      <li><strong>CSV</strong> — 엑셀에서 열기 좋음</li>
      <li><strong>JSON</strong> — 다른 시스템 통합용</li>
      <li><strong>Excel (XLSX)</strong> — 차트 포함 가능</li>
    </ul>

    <h3>절차</h3>
    <ol>
      <li>필터 적용 (선택)</li>
      <li><strong>Export</strong> 버튼 클릭</li>
      <li>형식 선택 (CSV / JSON / Excel)</li>
      <li>다운로드 시작</li>
    </ol>

    <h3>Export 항목</h3>
    <ul>
      <li>TPTC 키</li>
      <li>TC 이름</li>
      <li>TC 키</li>
      <li>실행 상태</li>
      <li>실행자</li>
      <li>실행일</li>
      <li>코멘트</li>
      <li>연결된 Issue</li>
      <li>우선순위</li>
      <li>컴포넌트</li>
      <li>라벨</li>
    </ul>

    <ScreenshotSlot label="Export 다이얼로그" />

    <hr />

    <h2>7. 리포트 활용 사례</h2>

    <h3>7-1. 일일 진행 보고</h3>
    <ul>
      <li>오전에 어제 진행률 확인 → Slack/Email로 공유</li>
      <li>매일 같은 형식으로 보고</li>
    </ul>

    <h3>7-2. 스프린트 종료 회고</h3>
    <ul>
      <li>스프린트 종료 시 전체 리포트 Export</li>
      <li>"이번 스프린트 결과: Pass 92%, Fail 5%, Block 3%"</li>
      <li>미해결 Issue 추적</li>
    </ul>

    <h3>7-3. QA 매니저 대시보드</h3>
    <ul>
      <li>여러 TP의 종합 통계</li>
      <li>가장 많이 실패하는 컴포넌트 식별</li>
      <li>팀원별 실행 부하 균형 확인</li>
    </ul>

    <h3>7-4. 릴리스 결정</h3>
    <ul>
      <li>"릴리스 게이트: Pass율 95% 이상"</li>
      <li>리포트로 게이트 통과 여부 판단</li>
    </ul>

    <h3>7-5. 외부 보고</h3>
    <ul>
      <li>고객사에 품질 증빙 자료 제출</li>
      <li>감사 기관에 테스트 수행 증빙</li>
    </ul>

    <hr />

    <h2>8. 리포트 해석 방법</h2>

    <h3>좋은 신호</h3>
    <ul>
      <li>Pass 비율이 90% 이상</li>
      <li>Fail 발견 → 빠르게 Issue 생성 → 빠르게 수정 → 재테스트 Pass</li>
      <li>Block과 Skip이 낮음 (5% 이하)</li>
      <li>모든 TPTC가 실행됨 (Not Yet 0%)</li>
    </ul>

    <h3>경고 신호</h3>
    <ul>
      <li><strong>Pass율이 갑자기 떨어짐</strong>: 새 빌드의 회귀 발생 가능성</li>
      <li><strong>Block이 많음</strong>: 환경 문제 또는 사전 조건 미충족</li>
      <li><strong>Skip이 많음</strong>: 테스트 자원 부족 또는 일정 압박</li>
      <li><strong>Not Yet이 50% 이상</strong>: 진행이 너무 느림</li>
      <li><strong>특정 컴포넌트만 Fail이 집중</strong>: 해당 모듈 품질 문제</li>
    </ul>

    <h3>안티 패턴 (피해야 할 상태)</h3>
    <ul>
      <li>Fail을 Skip으로 변경해서 통계 왜곡</li>
      <li>Issue 생성 없이 Fail만 누적</li>
      <li>Block 사유 코멘트 없음</li>
      <li>같은 사람이 모든 TPTC 실행 (검증 부족)</li>
    </ul>

    <hr />

    <h2>9. 자주 묻는 질문</h2>

    <h3>Q. 리포트 데이터는 실시간인가요?</h3>
    <p>A. 네. TPTC 상태가 변경되면 즉시 통계에 반영됩니다.</p>

    <h3>Q. 과거 시점의 리포트를 볼 수 있나요?</h3>
    <p>A. 일별 스냅샷이 자동으로 저장됩니다. 특정 날짜의 진행률을 조회할 수 있습니다.</p>

    <h3>Q. 여러 프로젝트의 리포트를 합칠 수 있나요?</h3>
    <p>A. 현재 버전에서는 프로젝트별로 분리되어 있습니다. Export 후 외부 도구에서 통합 가능합니다.</p>

    <h3>Q. 차트를 이미지로 저장할 수 있나요?</h3>
    <p>A. Excel Export 시 차트가 함께 포함됩니다. 또는 브라우저 스크린샷 사용.</p>

    <h3>Q. 리포트를 자동으로 이메일로 보낼 수 있나요?</h3>
    <p>A. 현재 버전에서는 수동 Export입니다. 자동화는 향후 기능 검토 중입니다.</p>

    <hr />

    <h2>10. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>리포트가 비어 있음</td><td>TP가 없거나 필터 적용 중</td><td>필터 초기화</td></tr>
        <tr><td>통계가 안 맞음</td><td>페이지 캐시</td><td>새로고침</td></tr>
        <tr><td>Export 파일이 깨짐</td><td>인코딩 문제</td><td>UTF-8로 저장된 파일인지 확인</td></tr>
        <tr><td>차트가 안 보임</td><td>브라우저 호환성</td><td>최신 Chrome/Edge 사용</td></tr>
        <tr><td>Excel 파일이 너무 큼</td><td>데이터가 많음</td><td>CSV 또는 필터로 분할</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-execution">08. 테스트 실행</Link></li>
      <li><Link to="/support/guide/import-export">11. Import / Export</Link> — 데이터 가져오기/내보내기</li>
      <li><Link to="/support/guide/overview-dashboard">14. Overview 대시보드</Link></li>
    </ul>
  </article>
);

export default TestReports;
