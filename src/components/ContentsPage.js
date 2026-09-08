import { html } from 'htm/preact';
import { useState } from 'preact/hooks';

export default function ContentsPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return html`
    <div class="gx-card">
      <div class="gx-card-header">
        <div style="flex:1;">
          <div class="gx-card-title">콘텐츠 편집</div>
          <div class="gx-card-subtitle">사내 공지 및 페이지 콘텐츠를 작성합니다.</div>
        </div>
      </div>
      <div style="padding:0 24px 24px;">
        <form class="row g-3" onSubmit=${(e) => e.preventDefault()}>
          <div class="col-12">
            <label class="form-label" for="content-title" style="font-size:12.5px;font-weight:600;color:var(--gx-text-muted);"
              >제목</label
            >
            <input
              id="content-title"
              type="text"
              class="form-control"
              style="font-size:13.5px;"
              value=${title}
              onInput=${(e) => setTitle(e.currentTarget.value)}
              placeholder="콘텐츠 제목을 입력하세요"
            />
          </div>
          <div class="col-12">
            <label class="form-label" for="content-body" style="font-size:12.5px;font-weight:600;color:var(--gx-text-muted);"
              >내용</label
            >
            <textarea
              id="content-body"
              class="form-control"
              style="font-size:13.5px;"
              rows="8"
              value=${body}
              onInput=${(e) => setBody(e.currentTarget.value)}
            ></textarea>
          </div>
          <div class="col-12 d-flex gap-2">
            <button type="submit" class="btn gx-btn-primary" style="padding:.5rem 1.1rem;font-size:13.5px;">저장</button>
            <button type="button" class="btn gx-btn-outline" style="padding:.5rem 1.1rem;font-size:13.5px;">미리보기</button>
          </div>
        </form>
      </div>
    </div>
  `;
}
