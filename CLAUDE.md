# CLAUDE.md — Portfolio web của Tôn Triều Vy

## Dự án
Portfolio cá nhân dạng website (chỉ frontend, không backend) cho **Tôn Triều Vy** — Digital Marketer,
điểm mạnh nhất là **video editing**, ngoài ra có visual design (thiết kế hình ảnh trực quan) và content
creation, nắm kiến thức marketing. Mục tiêu: trang portfolio hiện đại, Gen Z, sáng, dễ nhìn — người xem
phải thấy ngay "đây là người dựng video giỏi và hiểu marketing".

- Nguồn nội dung: `E:\TrieuVy\Portfolio_Ton Trieu Vy.pdf`. Không tự bịa số liệu, khách hàng hay kinh
  nghiệm không có trong PDF; thiếu thì để placeholder `[CẦN BỔ SUNG]`.
- Bản thiết kế (canvas): https://claude.ai/artifact/1kVH26TzKpb8baMp39e5MH
- Tham khảo màu: `E:\TrieuVy\colors\color_tone_1.jpg` (kem + xanh pastel), `color_tone_2.jpg` (kem + đỏ đô).

## Lệnh
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
npm run lint
```
Deploy: Vercel tự nhận Vite (Build `npm run build`, Output `dist`). Trang một trang dùng anchor
(#about, #skills, #work, #project, #visual, #contact) nên không cần `vercel.json`. Nếu sau này thêm
router, thêm rewrite về `/index.html`.

## Kiến trúc
```
src/
  data/portfolio.js        ← TOÀN BỘ nội dung (text, link, ảnh). Sửa nội dung chỉ ở đây.
  styles/tokens.css        ← design tokens (màu, font, spacing, radius, shadow)
  styles/global.css        ← reset, .container, .visually-hidden, .reveal
  components/ui/           ← khối dùng chung: Button, Icon, SectionHeader, Reveal, RecBadge, Viewfinder
  components/layout/       ← Navbar, Footer
  sections/                ← mỗi section 1 file .jsx + .module.css (Hero, Marquee, About, Skills,
                             VideoWork, CaseStudy, PrintWork, Contact)
  App.jsx                  ← thứ tự các section
  assets/images/           ← ảnh (import trong portfolio.js để Vite hash & tối ưu)
```
Quy ước:
- Component chỉ render dữ liệu nhận từ `portfolio.js`; không hard-code nội dung trong JSX
  (trừ câu phụ ngắn của từng section).
- Style dùng CSS Modules, mọi giá trị màu/font lấy từ `var(--…)` trong `tokens.css` — không viết hex trong module.
- Thêm icon: thêm vào map `ICONS` trong `components/ui/Icon.jsx`.
- Thêm video: thêm 1 object vào `videos` (`orientation: 'vertical' | 'horizontal'`). Lưới desktop được
  thiết kế cho 2 dọc + 2 ngang; nếu đổi số lượng, chỉnh `.grid` trong `VideoWork.module.css`.
- Import dùng alias `@/` = `src/`.
- Breakpoint chính: 1180 / 1100 / 960 / 900 / 760 / 700px (desktop-first trong từng module).
- Ảnh mới: resize ≤ 1100px cạnh dài, JPEG q≈82, dùng `loading="lazy"` (trừ ảnh hero).

## Hệ màu (tokens.css)
Nền sáng, xanh pastel; **điểm nhấn quan trọng** (CTA, nút play, số liệu, "& Video Editor") dùng
`--color-accent` đỏ đô `#6B1219` + `--color-cream` `#F3EBDD`. Chữ chính `--color-ink` `#1E2745`,
chữ phụ `--color-ink-soft` `#4A5575`, thương hiệu `--color-periwinkle` `#5A6FA6`.
Tỉ lệ ~70% nền sáng / 20% xanh / 10% đỏ đô. Chữ nhỏ trên nền sọc/xanh đậm dùng ink, không dùng periwinkle
(không đủ 4.5:1) — xem biến `--section-label-color`.

## Typography
Anton (display) · Instrument Serif italic (accent) · Mrs Saint Delafield (chữ ký) · IBM Plex Mono
(nhãn, timecode, metadata) · Be Vietnam Pro (body). Load qua Google Fonts trong `index.html`.

## Ngôn ngữ thiết kế (tránh "vibe AI")
- KHÔNG: icon ngôi sao lấp lánh, emoji, sticker xoay nghiêng, icon trong ô vuông bo góc, gradient loang.
- CÓ: chất liệu nghề dựng video — timecode, nhãn REC, khung ngắm (viewfinder corner), timeline/track,
  thước tick; nhãn section dạng mono viết hoa "01 — About me".
- Căn theo lưới, thông tin dạng bảng (nhãn trái / giá trị phải) có đường kẻ mảnh.
- Kỹ năng gọi là **Visual Design**, KHÔNG dùng "Graphics Designing".

## Nguyên tắc
- Nội dung web tiếng Anh (như PDF); trao đổi với người dùng bằng tiếng Việt.
- Video là phần nổi bật nhất trang.
- Responsive 390px → 1440px, không cuộn ngang. Tôn trọng `prefers-reduced-motion`.
- Accessibility: `alt` cho mọi ảnh, link/nút thật, focus ring rõ, link ngoài có `rel="noopener noreferrer"`.
