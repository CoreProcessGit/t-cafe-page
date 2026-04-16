import React from 'react';
import { Link } from 'react-router-dom';
import ScreenshotSlot from './ScreenshotSlot';
import img01 from '../../assets/user_guide/14-Attachment/01.png';
import img02 from '../../assets/user_guide/14-Attachment/02.png';

const Attachments = () => (
  <article className="guide-article">
    <h1>14. 첨부파일</h1>
    <p className="guide-lead">
      T-CAFE는 <strong>프로젝트 단위 첨부파일 페이지</strong>를 통해 외부 자료를 업로드·다운로드·관리할 수 있습니다. 첨부파일은 안전한 데이터센터에 저장되며, 업로드한 파일은 테스트 케이스 설명·사전 조건·기대 결과 등의 텍스트 안에 자동 인식되는 링크 형태로 참조할 수 있습니다.
    </p>

    <hr />

    <h2>1. 첨부파일 페이지 진입</h2>
    <p>상단 탭 → <strong>Attachments</strong> 클릭</p>
    <aside className="guide-callout">Attachments 페이지는 프로젝트별로 분리되어 있습니다. 다른 프로젝트의 첨부파일은 보이지 않습니다.</aside>

    <hr />

    <h2>2. 권한</h2>
    <table>
      <thead>
        <tr>
          <th>작업</th>
          <th className="center">Admin</th>
          <th className="center">Team Admin</th>
          <th className="center">Tester</th>
          <th className="center">Developer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>업로드</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>다운로드 / 미리보기</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
        <tr><td>삭제</td><td className="center">O</td><td className="center">O</td><td className="center">O</td><td className="center">O</td></tr>
      </tbody>
    </table>
    <p>→ <strong>모든 역할이 첨부파일을 사용 가능</strong>합니다.</p>

    <hr />

    <h2>3. 저장 위치 및 보안</h2>
    <p>T-CAFE는 첨부파일을 <strong>안전한 데이터센터</strong>에 저장합니다.</p>
    <ul>
      <li>프로젝트 단위로 격리되어 다른 프로젝트의 첨부는 접근 불가</li>
      <li>데이터는 암호화되어 안전하게 보호됩니다</li>
    </ul>

    <hr />

    <h2>4. 저장 용량 제한</h2>

    <h3>프로젝트 전체</h3>
    <ul>
      <li><strong>최대: 200 MB</strong> (모든 첨부파일 합계)</li>
      <li>한도 초과 시 새 업로드는 거부됨 → 기존 파일을 일부 삭제 후 재시도</li>
    </ul>

    <h3>단일 파일</h3>
    <ul>
      <li><strong>최대: 20 MB</strong> (한 파일당)</li>
      <li>20 MB 이내의 파일은 안정적으로 업로드됩니다.</li>
    </ul>

    <h3>사용량 확인</h3>
    <p>Attachments 페이지 상단에서 다음 정보가 표시됩니다:</p>
    <ul>
      <li>사용 중인 용량 / 전체 한도</li>
      <li>첨부파일 개수</li>
      <li>남은 용량</li>
    </ul>

    <ScreenshotSlot label="Storage Usage 표시" src={img01} />

    <hr />

    <h2>5. 파일 업로드</h2>

    <h3>절차</h3>
    <ol>
      <li>상단 탭 → <strong>Attachments</strong></li>
      <li>업로드 영역(점선 박스)에 다음 중 하나로 파일 추가
        <ul>
          <li><strong>Upload</strong> 버튼 클릭 → 파일 선택 다이얼로그</li>
          <li>파일을 영역 위로 <strong>드래그 앤 드롭</strong></li>
        </ul>
      </li>
      <li>분할 업로드 진행률 표시</li>
      <li>완료 후 첨부 목록에 추가됨</li>
    </ol>

    <h3>다중 업로드</h3>
    <ul>
      <li>여러 파일을 한 번에 선택하거나 드래그 앤 드롭으로 업로드 가능</li>
      <li>파일별로 순차적으로 분할 업로드</li>
    </ul>

    <aside className="guide-callout">클립보드 붙여넣기는 Attachments 페이지에서 지원하지 않습니다. 업로드 다이얼로그 또는 드래그 앤 드롭을 사용하세요.</aside>

    <hr />

    <h2>6. 파일 다운로드 및 미리보기</h2>

    <h3>다운로드</h3>
    <ol>
      <li>첨부파일 행의 <strong>Download</strong> 버튼</li>
      <li>분할 단위로 내려받은 후 브라우저가 저장 다이얼로그 표시</li>
    </ol>

    <h3>미리보기</h3>
    <ol>
      <li>첨부파일 행의 <strong>Preview</strong> 버튼</li>
      <li>모달에서 다음 형식이 직접 표시됨
        <ul>
          <li><strong>이미지</strong>: JPG / JPEG / PNG / GIF / SVG / WebP</li>
          <li><strong>PDF</strong></li>
        </ul>
      </li>
      <li>그 외 형식은 미지원 안내 → Download 후 로컬에서 확인</li>
    </ol>

    <ScreenshotSlot label="Preview 모달" src={img02} />

    <hr />

    <h2>7. 파일 삭제</h2>

    <h3>절차</h3>
    <ol>
      <li>첨부파일 행의 <strong>Delete</strong> 버튼 (휴지통 아이콘)</li>
      <li>확인 다이얼로그 → <strong>Confirm</strong></li>
    </ol>

    <h3>주의 사항</h3>
    <ul>
      <li>삭제된 파일은 <strong>복구할 수 없습니다</strong></li>
      <li>데이터센터에서도 즉시 삭제됨</li>
      <li>삭제 후 해당 파일을 참조하던 TC 본문의 링크는 작동하지 않게 됩니다</li>
    </ul>

    <hr />

    <h2>8. 첨부파일 메타데이터</h2>
    <p>각 첨부파일에는 다음 정보가 표시됩니다:</p>
    <table>
      <thead>
        <tr><th>항목</th><th>설명</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>파일명</strong></td><td>원본 파일 이름</td></tr>
        <tr><td><strong>크기</strong></td><td>자동으로 KB / MB로 표시</td></tr>
        <tr><td><strong>타입</strong></td><td>MIME 타입 (image/png 등)</td></tr>
        <tr><td><strong>업로드 사용자</strong></td><td>누가 올렸는지</td></tr>
        <tr><td><strong>업로드 일시</strong></td><td>언제 올렸는지</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>9. 첨부파일을 테스트 케이스에 참조하기</h2>
    <p>T-CAFE는 별도의 "TC 첨부 섹션"을 제공하지 않습니다. 대신 다음 방식으로 첨부파일을 본문 안에 연결할 수 있습니다.</p>
    <ol>
      <li>Attachments 페이지에서 파일을 업로드</li>
      <li>파일의 다운로드 URL을 복사 (<code>{'/attachment/content/<id>'}</code> 형태)</li>
      <li>TC의 <strong>Description</strong> 또는 <strong>Precondition</strong> 입력란에 URL을 붙여넣기</li>
      <li>입력 영역이 URL을 자동으로 인식하여 클릭 가능한 링크로 표시</li>
      <li>TC를 보는 사용자가 링크를 클릭하면 즉시 해당 파일이 다운로드됨</li>
    </ol>
    <aside className="guide-callout info">이 방식 덕분에 한 첨부파일을 여러 TC에서 동시에 참조할 수 있고, 중복 업로드가 줄어듭니다.</aside>

    <hr />

    <h2>10. 첨부파일 베스트 프랙티스</h2>

    <h3>DO</h3>
    <ul>
      <li><strong>압축</strong>: 가능하면 이미지/동영상을 압축한 후 업로드</li>
      <li><strong>명확한 파일명</strong>: <code>error-screenshot-2026-04-08.png</code> 형식</li>
      <li><strong>버전 표시</strong>: 같은 자료의 여러 버전은 파일명 끝에 v1, v2 등 표시</li>
      <li><strong>정기 정리</strong>: 오래된 첨부파일은 삭제하여 200 MB 한도 확보</li>
      <li><strong>링크로 재사용</strong>: 같은 자료를 여러 TC에서 쓸 때는 한 번만 업로드하고 링크로 참조</li>
    </ul>

    <h3>DON'T</h3>
    <ul>
      <li>거대한 동영상 파일 (단일 파일 20 MB / 프로젝트 합계 200 MB 한도 안에서만 가능)</li>
      <li>의미 없는 파일명 (<code>스크린샷.png</code>, <code>image1.jpg</code>)</li>
      <li>같은 파일 여러 번 업로드</li>
      <li>민감 정보가 담긴 파일 (실제 고객 데이터, 개인정보, 카드 정보)</li>
      <li>실행 파일 / 출처 불분명한 파일</li>
    </ul>

    <hr />

    <h2>11. 보안 주의사항</h2>

    <h3>민감 정보 처리</h3>
    <ul>
      <li><strong>실제 고객 데이터, 개인정보, 카드 정보 등은 첨부 금지</strong></li>
      <li>테스트용 더미 데이터만 사용</li>
      <li>실수로 올렸다면 즉시 삭제 + 회사 정책에 따라 보고</li>
    </ul>

    <h3>악성 파일</h3>
    <ul>
      <li>출처가 불분명한 파일은 업로드하지 마세요</li>
      <li>다운로드 전 백신 검사 권장</li>
      <li>T-CAFE는 자동 백신 검사를 수행하지 않습니다</li>
    </ul>

    <h3>외부 공유</h3>
    <ul>
      <li>첨부파일은 같은 Jira 프로젝트의 사용자에게만 공유됩니다</li>
      <li>외부 공유가 필요하면 Download 후 별도 채널 사용</li>
    </ul>

    <hr />

    <h2>12. 자주 발생하는 문제</h2>
    <table>
      <thead>
        <tr><th>문제</th><th>원인</th><th>해결</th></tr>
      </thead>
      <tbody>
        <tr><td>업로드 실패 (단일 파일 한도 초과)</td><td>파일이 20 MB 초과</td><td>파일 분할 또는 압축 후 재시도</td></tr>
        <tr><td>업로드 실패 (프로젝트 합계 한도 초과)</td><td>프로젝트 200 MB 한도 초과</td><td>기존 파일 일부 삭제 후 재시도</td></tr>
        <tr><td>한글 파일명 깨짐</td><td>인코딩 문제</td><td>영문 파일명으로 변경</td></tr>
        <tr><td>미리보기 안 됨</td><td>지원 안 되는 형식</td><td>Download 후 로컬에서 확인</td></tr>
        <tr><td>다운로드 느림</td><td>분할 단위 전송 진행 중</td><td>네트워크 안정 상태에서 다시 시도</td></tr>
        <tr><td>삭제했는데 복구하고 싶음</td><td>영구 삭제됨</td><td>복구 불가, 재업로드 필요</td></tr>
        <tr><td>TC 본문 링크가 깨짐</td><td>참조하던 첨부파일이 삭제됨</td><td>파일을 다시 업로드하고 링크 재생성</td></tr>
      </tbody>
    </table>

    <hr />

    <h2>다음 단계</h2>
    <ul>
      <li><Link to="/support/guide/test-cases">05. 테스트 케이스 기본 사용법</Link> — TC 본문에서 첨부파일 링크 사용</li>
      <li><Link to="/support/guide/test-cases-steps">07. 테스트 스텝 작성</Link> — 텍스트 입력 원칙</li>
      <li><Link to="/support/guide/test-execution">11. 테스트 실행</Link> — 실패 시 첨부파일 활용</li>
    </ul>
  </article>
);

export default Attachments;
