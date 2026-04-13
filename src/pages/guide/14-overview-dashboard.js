import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const OverviewDashboard = () => (
  <article className="guide-article">
    <h1>14. Overview 대시보드</h1>
    <p className="guide-lead">
      Overview는 T-CAFE의 메인 페이지로, 프로젝트 전체 현황을 한눈에 파악할 수 있는 대시보드입니다.
    </p>

    <hr />

    <h2>1. 진입 경로</h2>
    <p>상단 탭 → <strong>Overview</strong> (T-CAFE의 첫 페이지, 기본값)</p>

    <hr />

    <h2>2. 화면 구성</h2>
    <p>Overview 페이지는 다음 영역으로 구성됩니다:</p>
    <table>
      <thead>
        <tr><th>영역</th><th>위치</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Welcome Banner</strong></td><td>상단 (첫 사용 시)</td><td>환영 메시지 + 샘플 데이터 생성</td></tr>
        <tr><td><strong>Board (게시판)</strong></td><td>상단 또는 좌측</td><td>공지사항 / 일반 게시글</td></tr>
        <tr><td><strong>Count Section</strong></td><td>중앙</td><td>전체 통계 (TC/TP 개수 등)</td></tr>
        <tr><td><strong>Test Milestone</strong></td><td>중앙</td><td>마일스톤 타임라인</td></tr>
        <tr><td><strong>Status Section</strong></td><td>하단</td><td>TP 상태별 통계</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="Overview 메인 화면" />

    <hr />

    <h2>3. 권한</h2>
    <table>
      <thead>
        <tr>
          <th>기능</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>페이지 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>통계/차트 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td><strong>프로젝트 설명 편집</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>샘플 데이터 생성</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td><strong>게시판 글 작성/삭제</strong></td><td className="center"><strong>O</strong></td><td className="center">X</td><td className="center">X</td><td className="center">X</td></tr>
        <tr><td>Milestone 조회</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>
    <p>→ <strong>모든 사용자가 조회 가능</strong>, 편집/생성은 Admin 전용</p>

    <hr />

    <h2>4. Welcome Banner</h2>
    <p>T-CAFE에 처음 접속하면 표시되는 환영 배너입니다.</p>

    <h3>표시 조건</h3>
    <ul>
      <li>사용자가 닫지 않은 경우</li>
      <li>또는 관리자가 다시 표시한 경우</li>
    </ul>

    <h3>구성 요소</h3>
    <ul>
      <li>환영 메시지</li>
      <li>T-CAFE 소개</li>
      <li><strong>샘플 데이터 생성 버튼</strong> (Admin 전용)</li>
      <li>닫기 버튼 (×)</li>
    </ul>

    <ScreenshotSlot label="Welcome Banner" />

    <p>자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기</Link> 참고</p>

    <hr />

    <h2>5. Board (게시판) 섹션</h2>
    <p>Overview 페이지 안에 게시판이 임베드되어 표시됩니다.</p>

    <h3>표시 항목</h3>
    <ul>
      <li>최근 게시글 목록 (5~10개)</li>
      <li>공지(Notice) 우선 표시</li>
      <li>작성자, 작성일, 조회수</li>
    </ul>

    <h3>사용</h3>
    <ul>
      <li>게시글 클릭 → 상세 페이지로 이동</li>
      <li>관리자는 + Write Post 버튼으로 작성 가능</li>
    </ul>

    <p>자세한 내용은 <Link to="/support/guide/board">13. 게시판</Link> 참고</p>

    <hr />

    <h2>6. Count Section (개수 통계)</h2>
    <p>프로젝트의 주요 지표를 카드 형식으로 표시합니다.</p>

    <h3>표시 카드</h3>
    <table>
      <thead>
        <tr><th>카드</th><th>내용</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Total Test Cases</strong></td><td>프로젝트의 전체 TC 개수</td></tr>
        <tr><td><strong>Total Test Plans</strong></td><td>프로젝트의 전체 TP 개수</td></tr>
        <tr><td><strong>Active TP</strong></td><td>현재 진행 중인 TP 개수</td></tr>
        <tr><td><strong>Completed TP</strong></td><td>완료된 TP 개수</td></tr>
        <tr><td><strong>Pass Rate</strong></td><td>전체 실행 항목의 Pass 비율</td></tr>
      </tbody>
    </table>

    <ScreenshotSlot label="Count Section" />

    <h3>카드 클릭</h3>
    <ul>
      <li>각 카드 클릭 시 해당 페이지로 이동</li>
      <li>예: "Total Test Cases" 클릭 → Test Cases 탭</li>
    </ul>

    <hr />

    <h2>7. Test Milestone (테스트 마일스톤 타임라인)</h2>
    <p>진행 중인 TP들을 <strong>간트 차트 형식의 타임라인</strong>으로 표시합니다.</p>

    <h3>표시 정보</h3>
    <ul>
      <li><strong>TP 이름</strong></li>
      <li><strong>시작일 ~ 종료일</strong> (막대 차트)</li>
      <li><strong>현재 진행률</strong> (막대의 채워진 정도)</li>
      <li><strong>상태</strong> (색상으로 구분)</li>
    </ul>

    <ScreenshotSlot label="Test Milestone Timeline" />

    <h3>색상 규칙</h3>
    <ul>
      <li>Completed (완료)</li>
      <li>Open (열림)</li>
      <li>Draft (초안)</li>
      <li>Overdue (지연)</li>
      <li>사용자 정의 상태도 색상으로 구분</li>
    </ul>

    <h3>인터랙션</h3>
    <ul>
      <li>TP 막대를 클릭하면 해당 TP 상세 페이지로 이동</li>
      <li>호버 시 추가 정보 표시 (시작일, 종료일, 진행률 %)</li>
    </ul>

    <h3>필터</h3>
    <ul>
      <li>상태별 표시/숨기기</li>
      <li>날짜 범위 조절</li>
    </ul>

    <h3>자동 정렬</h3>
    <ul>
      <li>시작일 순으로 자동 정렬</li>
      <li>같은 날 시작이면 종료일 순</li>
    </ul>

    <hr />

    <h2>8. Status Section (상태별 통계)</h2>
    <p>TP의 상태별 분포를 시각화합니다.</p>

    <h3>표시 차트</h3>
    <ul>
      <li><strong>파이 차트</strong>: 상태별 비율</li>
      <li><strong>막대 차트</strong>: 상태별 개수</li>
      <li><strong>트렌드 차트</strong>: 시간순 변화</li>
    </ul>

    <ScreenshotSlot label="Status Section" />

    <hr />

    <h2>9. 프로젝트 설명 편집 (Admin 전용)</h2>
    <p>Overview 페이지에 프로젝트 설명을 표시할 수 있습니다.</p>

    <h3>절차</h3>
    <ol>
      <li>Overview 페이지 → 프로젝트 설명 영역의 <strong>Edit</strong> 버튼 (Admin만 보임)</li>
      <li>리치 텍스트로 입력</li>
      <li><strong>Save</strong></li>
    </ol>

    <h3>활용</h3>
    <ul>
      <li>프로젝트 목적과 범위 설명</li>
      <li>팀원에게 전달할 핵심 정보</li>
      <li>유관 부서 연락처</li>
      <li>문서/위키 링크</li>
    </ul>

    <hr />

    <h2>10. 샘플 데이터 생성 (Admin 전용)</h2>
    <p>처음 사용 시 빠르게 기능을 파악할 수 있도록 샘플 데이터를 생성합니다.</p>
    <p>자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기 → 3. 샘플 데이터 생성</Link> 참고</p>

    <hr />

    <h2>11. 자동 새로고침</h2>
    <p>Overview 페이지의 일부 데이터는 자동으로 갱신됩니다:</p>
    <table>
      <thead>
        <tr><th>항목</th><th>갱신 주기</th></tr>
      </thead>
      <tbody>
        <tr><td>통계 카운트</td><td>페이지 진입 시</td></tr>
        <tr><td>게시판</td><td>페이지 진입 시</td></tr>
        <tr><td>Milestone</td><td>페이지 진입 시</td></tr>
        <tr><td>사용자 역할</td><td>주기적으로 자동 갱신</td></tr>
      </tbody>
    </table>
    <p>수동 새로고침을 원하면 페이지 새로고침(F5) 또는 각 섹션의 Refresh 버튼 사용</p>

    <hr />

    <h2>12. 프로젝트 변경</h2>
    <p>Overview 페이지에서도 우상단 프로젝트 선택 드롭다운으로 다른 프로젝트로 전환 가능합니다.</p>

    <h3>전환 시 동작</h3>
    <ul>
      <li>모든 데이터가 새 프로젝트의 것으로 교체됨</li>
      <li>Welcome Banner 표시 여부도 새 프로젝트 기준</li>
      <li>사용자 권한도 새 프로젝트 기준으로 재조회</li>
    </ul>

    <hr />

    <h2>13. 언어 변경</h2>
    <p>우상단 언어 선택 메뉴에서 한국어 / English / 日本語 중 선택</p>

    <h3>영향 범위</h3>
    <ul>
      <li>모든 UI 텍스트</li>
      <li>날짜 형식</li>
      <li>숫자 형식</li>
    </ul>

    <p>자세한 내용은 <Link to="/support/guide/getting-started">01. 시작하기</Link> 참고</p>

    <hr />

    <h2>14. Overview를 활용하는 일반적인 시나리오</h2>

    <h3>시나리오 1: 매일 아침 점검</h3>
    <pre><code>{`1. Jira 접속 → T-CAFE 탭
2. Overview 페이지 자동 진입
3. 게시판에서 새 공지 확인
4. Milestone에서 오늘 마감인 TP 확인
5. Pass Rate가 어제 대비 떨어졌는지 확인
6. 필요한 경우 Test Plans 탭으로 이동해서 상세 확인`}</code></pre>

    <h3>시나리오 2: QA 매니저의 주간 리포트</h3>
    <pre><code>{`1. Overview에서 전체 통계 캡처
2. Milestone 타임라인 캡처
3. Status Section의 차트 캡처
4. 주간 리포트 메일에 첨부`}</code></pre>

    <h3>시나리오 3: 신규 멤버 온보딩</h3>
    <pre><code>{`1. Admin이 새 멤버에게 T-CAFE 안내
2. 신규 멤버가 Overview에서 프로젝트 설명 확인
3. 게시판에서 환영 메시지 확인
4. Test Cases 탭으로 이동해 학습 시작`}</code></pre>

    <hr />

    <h2>15. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>Overview가 비어 있음</td><td>데이터 없음</td><td>샘플 데이터 생성 또는 TC/TP 추가</td></tr>
        <tr><td>Welcome Banner가 안 사라짐</td><td>페이지 새로고침 필요</td><td>F5</td></tr>
        <tr><td>Welcome Banner가 다시 안 보임</td><td>한 번 닫음</td><td>정상, 의도적 동작</td></tr>
        <tr><td>Milestone에 TP가 안 보임</td><td>시작/종료일 미설정</td><td>TP 편집해서 날짜 입력</td></tr>
        <tr><td>통계가 0으로 표시</td><td>권한 부족 또는 캐시</td><td>권한 확인 후 새로고침</td></tr>
        <tr><td>게시판에 글이 안 보임</td><td>Admin이 삭제했거나 미작성</td><td>Admin에게 확인</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>16. Overview 베스트 프랙티스</h2>

    <h3>Admin</h3>
    <ul>
      <li><strong>프로젝트 설명을 항상 최신 상태로</strong> 유지</li>
      <li><strong>공지사항을 게시판에 정기적으로</strong> 작성</li>
      <li><strong>샘플 데이터는 신규 프로젝트마다</strong> 생성 (학습 자료)</li>
      <li>신규 팀원이 들어오면 Overview를 먼저 보여주기</li>
    </ul>

    <h3>일반 사용자</h3>
    <ul>
      <li><strong>매일 아침 첫 화면으로</strong> 활용</li>
      <li><strong>게시판 새 글 확인 습관</strong></li>
      <li><strong>Milestone에서 본인 담당 TP 위치 파악</strong></li>
      <li>통계가 이상하면 즉시 매니저에게 보고</li>
    </ul>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/getting-started">01. 시작하기</Link></li>
      <li><Link to="/support/guide/board">13. 게시판</Link></li>
      <li><Link to="/support/guide/test-reports">09. 테스트 리포트</Link> — 더 자세한 리포트</li>
    </ul>
  </article>
);

export default OverviewDashboard;
