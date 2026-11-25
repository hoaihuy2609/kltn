# Báo cáo đề cương khóa luận tốt nghiệp

Bộ slide trình chiếu, xem trực tuyến tại trang Vercel của repo này.

| File | Dùng để |
|---|---|
| `index.html` | Trình chiếu trên trình duyệt (chạy được cả khi không có mạng) |
| `tai-ve/Bao_cao_de_cuong.pptx` | Sửa trong PowerPoint |
| `tai-ve/Bao_cao_de_cuong.pdf` | Nộp hoặc in |

**Ô “Trích nguyên văn”:** chạm (HTML) để phóng to đoạn văn bản gốc; trong PowerPoint, bấm để tới slide căn cứ pháp lí.

**Hiệu ứng:** bản HTML có hiệu ứng nhẹ (nội dung trượt lên lần lượt, thanh số liệu chạy ra, thanh tiến độ ở đáy); tự tắt nếu máy bật chế độ giảm chuyển động. Bản PowerPoint có hiệu ứng chuyển slide mờ dần (Fade).

**Ghi chú người nói (viết theo đề cương):** phím `N` mở khung ghi chú ở cuối màn hình (để tập dượt); phím `P` mở *cửa sổ người nói* riêng (ghi chú + đồng hồ + nút chuyển slide) — kéo cửa sổ này sang màn hình laptop, cửa sổ chính để trên máy chiếu. Trong PowerPoint, ghi chú nằm ở mục Notes (xem bằng Presenter View). Nội dung ghi chú sửa trong `src/notes.cjs`.

**Điều khiển khi trình chiếu:** ← → (hoặc chạm nửa trái/phải, vuốt trên máy tính bảng) để chuyển slide · `F` toàn màn hình · `Ctrl+P` lưu PDF · thêm `#5` vào cuối đường dẫn để mở thẳng slide 5.

## Sửa nội dung

Mọi chữ, số liệu và bố cục nằm trong `src/deck.cjs`. Ảnh trích Thông tư 22/2021 và Công văn 7991 (có tô đỏ) nằm ở `src/assets/trich/`, được cắt từ PDF gốc bằng `src/trich.py` (cần `pdfplumber`, `Pillow`, `pdftoppm`). Sau khi sửa:

```bash
npm install
npm run slides   # tạo lại index.html và tai-ve/Bao_cao_de_cuong.pptx
npm run pdf      # tạo lại tai-ve/Bao_cao_de_cuong.pdf (cần Playwright + Chromium)
```

Phông chữ Be Vietnam Pro (giấy phép SIL Open Font License, xem `src/fonts/`). Bản PowerPoint dùng Arial để mở được trên mọi máy.
