import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const GettingStarted = () => (
  <article className="guide-article">
    <h1>01. 시작하기</h1>
    <p className="guide-lead">
      T-CAFE를 처음 사용하시는 분들을 위한 안내입니다. 설치부터 첫 테스트 케이스 생성까지 단계별로 따라할 수 있습니다.
    </p>

    <hr />

    <h2>1. T-CAFE 설치</h2>

    <h3>필수 조건</h3>
    <ul>
      <li>Atlassian Jira Cloud 활성 구독</li>
      <li>Jira 관리자 권한 (앱 설치 시 필요)</li>
    </ul>

    <h3>설치 절차</h3>
    <ol>
      <li>Jira Cloud → 설정 → <strong>Apps</strong> (앱) → <strong>Find new apps</strong> (새 앱 찾기)</li>
      <li>검색창에 "<strong>T-CAFE</strong>" 입력</li>
      <li>검색 결과에서 T-CAFE 선택 → <strong>Get it now</strong> 클릭</li>
      <li>권한 요청 화면에서 <strong>Get it now</strong> 다시 클릭</li>
      <li>설치 완료</li>
    </ol>

    <ScreenshotSlot label="Marketplace 설치 화면" />

    <h3>설치 후 첫 진입</h3>
    <ul>
      <li>Jira 상단 메뉴에 <strong>T-CAFE</strong> 탭이 추가됩니다</li>
      <li>클릭하여 T-CAFE 메인 화면으로 이동</li>
    </ul>

    <hr />

    <h2>2. 첫 화면 — Welcome Banner</h2>
    <p>T-CAFE에 처음 접속하면 Overview 페이지에 환영 배너(Welcome Banner)가 표시됩니다.</p>

    <h3>Welcome Banner 구성 요소</h3>
    <ul>
      <li><strong>환영 메시지</strong>: T-CAFE 소개</li>
      <li><strong>샘플 데이터 생성 버튼</strong>: Admin 권한이 있는 경우에만 표시</li>
      <li><strong>닫기 버튼</strong> (×): 배너 숨기기</li>
    </ul>

    <ScreenshotSlot label="Welcome Banner 화면" />

    <hr />

    <h2>3. 샘플 데이터 생성 (관리자용, 권장)</h2>
    <p>처음 사용하시는 경우 <strong>샘플 데이터를 생성</strong>하여 T-CAFE의 기능을 빠르게 파악할 수 있습니다.</p>

    <h3>권한</h3>
    <ul>
      <li><strong>Admin 전용</strong> (Team Admin / Tester / Developer는 사용 불가)</li>
    </ul>

    <h3>생성되는 샘플 데이터</h3>
    <p>샘플 데이터를 생성하면 다음이 자동으로 만들어집니다:</p>
    <ul>
      <li><strong>6개 폴더</strong>: Login, Dashboard, User Management, Payment, API Tests, Cross Browser</li>
      <li><strong>약 10개의 Test Case</strong> (Single 형식)</li>
      <li><strong>6개의 Factor Combination Test Case</strong> (Cross Browser 폴더)</li>
      <li><strong>2개의 Test Plan</strong> (Sprint 1 통합 테스트, Sprint 2 회귀 테스트)</li>
      <li><strong>2개의 게시판 게시글</strong> (공지 + 일반)</li>
      <li>
        <strong>기본 샘플 Configuration</strong> (Configuration에서 자유롭게 추가/수정/삭제 가능):
        Priority (Critical/High/Medium/Low), Case Type (Function/Performance/Regression/Security),
        Component (Frontend/Backend API/Database/Authentication/Payment), Plan Status (Draft/Open/Completed)
      </li>
    </ul>

    <h3>생성 절차</h3>
    <ol>
      <li>Overview 페이지의 Welcome Banner에서 "<strong>샘플 데이터 생성</strong>" 버튼 클릭</li>
      <li>생성 진행 (약 30초)</li>
      <li>완료 메시지 확인 후 Test Cases 탭에서 결과 확인</li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>샘플 데이터는 <strong>프로젝트당 1회</strong>만 생성 가능합니다</li>
      <li>이미 생성된 적이 있다면 중복 생성되지 않습니다</li>
      <li>샘플 데이터 이름 앞에는 모두 <code>[Sample]</code> 접두사가 붙습니다 (식별 용이)</li>
      <li>필요 없으면 개별적으로 삭제하시면 됩니다</li>
    </ul>

    <hr />

    <h2>4. T-CAFE 메인 메뉴 구조</h2>
    <p>T-CAFE는 상단 탭으로 다음 페이지를 제공합니다:</p>

    <table>
      <thead>
        <tr>
          <th>탭</th>
          <th>설명</th>
          <th>권한</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Overview</strong></td>
          <td>대시보드, 통계, 게시판, Milestone</td>
          <td>모든 사용자</td>
        </tr>
        <tr>
          <td><strong>Test Cases</strong></td>
          <td>테스트 케이스 관리</td>
          <td>모든 사용자 (역할별 권한 차이)</td>
        </tr>
        <tr>
          <td><strong>Test Plans</strong></td>
          <td>테스트 계획 관리 및 실행</td>
          <td>모든 사용자 (역할별 권한 차이)</td>
        </tr>
        <tr>
          <td><strong>Test Reports</strong></td>
          <td>테스트 리포트</td>
          <td>모든 사용자</td>
        </tr>
        <tr>
          <td><strong>Configuration</strong></td>
          <td>설정 (Priorities, Case Types 등)</td>
          <td><strong>Admin / Team Admin</strong></td>
        </tr>
        <tr>
          <td><strong>Attachments</strong></td>
          <td>첨부파일 관리</td>
          <td>모든 사용자</td>
        </tr>
      </tbody>
    </table>

    <ScreenshotSlot label="상단 탭 메뉴" />

    <hr />

    <h2>5. 프로젝트 선택과 언어 변경</h2>

    <h3>프로젝트 선택</h3>
    <ul>
      <li>T-CAFE는 <strong>프로젝트별로 데이터가 격리</strong>됩니다</li>
      <li>우상단의 프로젝트 선택 드롭다운에서 작업할 프로젝트를 선택하세요</li>
      <li>프로젝트를 변경하면 모든 데이터가 해당 프로젝트로 전환됩니다</li>
    </ul>

    <h3>언어 변경</h3>
    <ul>
      <li>우상단의 언어 선택 메뉴에서 한국어 / English / 日本語 중 선택</li>
      <li>언어 설정은 <strong>사용자별 + 프로젝트별</strong>로 저장됩니다</li>
    </ul>

    <ScreenshotSlot label="프로젝트/언어 선택 메뉴" />

    <hr />

    <h2>6. 다음 단계</h2>
    <p>T-CAFE를 처음 사용하신다면 다음 순서로 진행하시는 것을 권장합니다:</p>
    <ol>
      <li><strong>샘플 데이터 생성</strong> (위 3번)</li>
      <li><strong>사용자 권한 설정</strong> (<Link to="/support/guide/permissions">02. 사용자 권한</Link>)</li>
      <li><strong>테스트 케이스 살펴보기</strong> (<Link to="/support/guide/test-cases">03. 테스트 케이스 기본 사용법</Link>)</li>
      <li><strong>테스트 플랜 살펴보기</strong> (<Link to="/support/guide/test-plans">07. 테스트 플랜 관리</Link>)</li>
      <li><strong>실제 테스트 케이스 작성하기</strong></li>
    </ol>

    <hr />

    <h2>자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr>
          <th>문제</th>
          <th>해결</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Welcome Banner가 보이지 않음</td>
          <td>이미 닫은 적이 있거나, 다른 페이지에 있는지 확인</td>
        </tr>
        <tr>
          <td>샘플 데이터 생성 버튼이 비활성</td>
          <td>Admin 권한이 없는 경우 표시 안 됨</td>
        </tr>
        <tr>
          <td>샘플 데이터 생성 실패</td>
          <td>이미 생성된 적이 있는지 확인 ([Sample] 접두사 데이터 검색)</td>
        </tr>
        <tr>
          <td>프로젝트가 보이지 않음</td>
          <td>Jira에서 해당 프로젝트 접근 권한 확인</td>
        </tr>
      </tbody>
    </table>
    <p>자세한 내용은 <Link to="/support/guide/faq">15. FAQ</Link>를 참고하세요.</p>
  </article>
);

export default GettingStarted;
