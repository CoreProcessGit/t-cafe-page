import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';

const Steps = () => (
  <article className="guide-article">
    <h1>05. 테스트 스텝 작성</h1>
    <p className="guide-lead">
      테스트 스텝(Test Steps)은 테스터가 실제로 수행해야 할 단계와 기대 결과를 정의하는 가장 중요한 부분입니다.
    </p>

    <hr />

    <h2>1. 테스트 스텝 구조</h2>
    <p>각 테스트 스텝은 <strong>번호 + 3개의 컬럼</strong>으로 구성됩니다:</p>
    <table>
      <thead>
        <tr>
          <th>컬럼</th>
          <th>영문</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>#</strong></td><td>No.</td><td>자동 부여되는 순번 (1, 2, 3...)</td></tr>
        <tr><td><strong>단계</strong></td><td>Step</td><td>테스터가 수행할 동작</td></tr>
        <tr><td><strong>테스트 데이터</strong></td><td>Test Data</td><td>입력값, 파일명, 계정 등</td></tr>
        <tr><td><strong>기대 결과</strong></td><td>Expected Result</td><td>정상이라면 어떤 결과가 나와야 하는지</td></tr>
      </tbody>
    </table>
    <p>각 셀은 <strong>여러 줄 입력 가능한 textarea</strong>이며, 입력 내용에 맞춰 자동으로 높이가 늘어납니다.</p>

    <h3>예시</h3>
    <table>
      <thead>
        <tr><th>#</th><th>Step</th><th>Test Data</th><th>Expected Result</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>로그인 페이지로 이동</td><td>URL: /login</td><td>로그인 폼 표시</td></tr>
        <tr><td>2</td><td>사용자명 입력</td><td>username: testuser</td><td>입력 필드에 값 표시</td></tr>
        <tr><td>3</td><td>비밀번호 입력</td><td>password: testPassword</td><td>로그인 성공 시 대시보드로 이동</td></tr>
        <tr><td>4</td><td>로그인 버튼 클릭</td><td>-</td><td>대시보드로 이동</td></tr>
      </tbody>
    </table>
    <aside className="guide-callout">
      <strong>민감 정보 주의</strong>: T-CAFE는 Test Data를 안전하게 보호하여 저장합니다. 단, <strong>T-CAFE 화면에서는 입력한 그대로 표시</strong>되며, 권한이 있는 사용자라면 누구나 볼 수 있습니다. 실제 운영 비밀번호·API 키·개인정보를 직접 적지 말고, 테스트 전용 더미 계정 정보를 사용하세요.
    </aside>

    <hr />

    <h2>2. 스텝 추가</h2>

    <h3>절차</h3>
    <ol>
      <li>TC 작성/수정 화면의 <strong>Test Steps</strong> 섹션</li>
      <li>표 하단의 <strong>Add</strong> 버튼 클릭</li>
      <li>새 행이 추가됨</li>
      <li>각 컬럼에 내용 입력</li>
    </ol>

    <ScreenshotSlot label="Test Steps 에디터" />

    <hr />

    <h2>3. 스텝 삭제</h2>

    <h3>절차</h3>
    <ul>
      <li>삭제할 스텝 우측의 <strong>× 아이콘</strong> 클릭</li>
      <li>행이 즉시 제거됨</li>
    </ul>

    <aside className="guide-callout">마지막 스텝 1개는 삭제되지 않습니다 (최소 1개 유지).</aside>

    <hr />

    <h2>4. 스텝 입력 팁</h2>
    <p>스텝 셀은 <strong>plain text</strong> 입력입니다 (서식·이미지 미지원). 텍스트 작성 시 다음 원칙을 권장합니다.</p>

    <h3>좋은 작성 예</h3>
    <ul>
      <li>한 셀에 한 줄로 간결하게</li>
      <li>조건이 길면 줄바꿈(Enter)으로 가독성 확보</li>
      <li>약자/내부 용어 풀어 쓰기</li>
    </ul>

    <h3>피해야 할 작성</h3>
    <ul>
      <li>여러 동작을 한 스텝에 몰아넣기</li>
      <li>모호한 표현 ("대충 클릭", "잘 동작")</li>
    </ul>

    <hr />

    <h2>5. 사전 조건 (Precondition)</h2>
    <p>테스트 스텝과 별도로, <strong>사전 조건</strong>은 테스트를 시작하기 전에 갖춰져야 할 상태를 정의합니다.</p>

    <h3>작성 위치</h3>
    <ul>
      <li>TC 작성 화면의 <strong>Precondition</strong> 섹션</li>
      <li>contenteditable 입력 영역 (plain text)</li>
      <li>URL을 입력하면 자동으로 클릭 가능한 링크로 변환됨</li>
      <li>첨부파일 참조 태그도 자동 인식</li>
    </ul>

    <h3>좋은 사전 조건 예시</h3>
    <pre><code>{`- 사용자가 회원가입을 완료한 상태
- 데이터베이스에 최소 5개의 상품이 등록되어 있음
- 결제 모듈이 테스트 모드로 설정되어 있음
- 사용자 권한: 일반 회원`}</code></pre>

    <h3>좋지 않은 사전 조건 예시</h3>
    <pre><code>{`- 시스템이 잘 동작하고 있어야 함 ← 너무 모호함
- 어제 만든 데이터가 있어야 함 ← 검증 불가`}</code></pre>

    <h3>데이터 보호</h3>
    <p>T-CAFE는 사전 조건과 테스트 스텝을 안전하게 보호하여 저장합니다. 별도 설정이 필요 없습니다.</p>

    <hr />

    <h2>6. 테스트 데이터 (Test Data) 작성 팁</h2>

    <h3>권장 형식</h3>
    <table>
      <thead>
        <tr><th>형식</th><th>예시</th></tr>
      </thead>
      <tbody>
        <tr><td>키-값</td><td><code>username: testuser</code></td></tr>
        <tr><td>URL</td><td><code>URL: https://example.com/login</code></td></tr>
        <tr><td>파일</td><td><code>file: sample.pdf (3KB)</code></td></tr>
        <tr><td>JSON</td><td><code>{`{"id": 1, "name": "test"}`}</code></td></tr>
        <tr><td>입력 없음</td><td><code>-</code> 또는 빈칸</td></tr>
      </tbody>
    </table>

    <h3>민감 정보 처리</h3>
    <ul>
      <li><strong>실제 운영 패스워드를 적지 마세요</strong></li>
      <li>테스트 전용 계정 정보만 사용</li>
      <li>개인정보(주민번호, 신용카드 등)는 마스킹 또는 더미 데이터</li>
    </ul>

    <hr />

    <h2>7. 기대 결과 (Expected Result) 작성 팁</h2>

    <h3>좋은 기대 결과</h3>
    <ul>
      <li><strong>구체적</strong>: "성공 메시지가 표시됨" → "녹색 배경에 'Login successful'이 3초간 표시됨"</li>
      <li><strong>검증 가능</strong>: 테스터가 명확히 판단할 수 있는 표현</li>
      <li><strong>단일 검증</strong>: 한 스텝당 하나의 핵심 결과</li>
    </ul>

    <h3>좋지 않은 기대 결과</h3>
    <ul>
      <li>"잘 작동함"</li>
      <li>"에러 없음"</li>
      <li>"정상"</li>
    </ul>

    <h3>다중 검증이 필요할 때</h3>
    <p>한 스텝의 기대 결과에 여러 항목을 줄바꿈으로 나열:</p>
    <pre><code>{`- 페이지 제목이 "대시보드"로 변경됨
- URL이 /dashboard로 변경됨
- 환영 메시지가 우상단에 표시됨
- 로그아웃 버튼이 활성화됨`}</code></pre>

    <hr />

    <h2>8. 작성 베스트 프랙티스</h2>

    <h3>DO</h3>
    <ul>
      <li>구체적이고 실행 가능한 동작 작성</li>
      <li>한 스텝 = 한 동작</li>
      <li>일관된 형식 유지</li>
      <li>시각적 보조가 필요하면 <Link to="/support/guide/attachments">12. 첨부파일</Link>을 사용해 별도 첨부</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>한 스텝에 너무 많은 동작 몰아넣기</li>
      <li>모호한 표현 ("적절히", "잘", "정상적으로")</li>
      <li>검증 불가능한 결과</li>
      <li>외부 문서에 의존하는 설명</li>
    </ul>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-cases">03. 테스트 케이스 기본 사용법</Link></li>
      <li><Link to="/support/guide/factor-combination">06. Factor Combination</Link> — 여러 조합을 자동으로 만들기</li>
      <li><Link to="/support/guide/attachments">12. 첨부파일</Link> — 시각적 자료가 필요할 때</li>
    </ul>
  </article>
);

export default Steps;
