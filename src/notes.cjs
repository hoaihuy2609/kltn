// Ghi chú người nói cho từng slide, viết theo nội dung đề cương.
// Khoá là tiêu đề slide (hoặc id của slide bìa, slide cảm ơn).
// Bản HTML: phím N mở khung ghi chú, phím P mở cửa sổ người nói. Bản PowerPoint: mục Notes.

module.exports = {
  'bia': `Kính thưa quý thầy cô trong hội đồng. Em là Nguyễn Trần Hoài Huy, sinh viên ngành Sư phạm Vật lý. Hôm nay em xin báo cáo đề cương khóa luận tốt nghiệp với đề tài: "Xây dựng website hỗ trợ giáo viên trong việc biên soạn đề kiểm tra Vật lí 10 nhằm đánh giá năng lực học sinh ở học kì II", dưới sự hướng dẫn của thầy TS. Trần Quốc Duyệt.`,

  'Báo cáo gồm mười phần, theo đề cương': `Bài báo cáo đi theo đúng mười mục của đề cương: tính cần thiết; tổng quan vấn đề nghiên cứu; mục tiêu; câu hỏi nghiên cứu; đối tượng và phạm vi; phương pháp; kết quả bước đầu của giai đoạn 1; nội dung và cấu trúc dự kiến của khóa luận; những đóng góp dự kiến; và kế hoạch thực hiện. Phần em nhấn mạnh là phần 7 — kết quả bước đầu — vì website và dữ liệu của chủ đề "Năng lượng, công, công suất" đã xây dựng xong.`,

  'Vì sao cần một website soạn đề?': `Chương trình giáo dục phổ thông 2018 chuyển trọng tâm từ truyền thụ kiến thức sang hình thành phẩm chất, năng lực; mỗi môn học được xác định bằng hệ thống yêu cầu cần đạt (YCCĐ). Kiểm tra, đánh giá vì thế phải căn cứ vào YCCĐ chứ không chỉ vào nội dung sách giáo khoa. Thông tư 22/2021 quy định đề kiểm tra định kì được xây dựng theo ma trận và bản đặc tả.

Ngày 17/12/2024, Bộ ban hành Công văn 7991 kèm mẫu ma trận và bản đặc tả. Đề gồm trắc nghiệm nhiều lựa chọn, "Đúng – Sai", trả lời ngắn và tự luận; mỗi dạng phân bổ theo ba mức Biết, Hiểu, Vận dụng; bản đặc tả phải chỉ rõ mỗi YCCĐ được đánh giá bằng bao nhiêu câu, ở mức nào. Giáo viên phải xử lí cùng lúc nhiều ràng buộc: số câu theo dạng và mức, tỉ lệ điểm, phủ kín YCCĐ, và sự khớp nhau giữa ma trận, bản đặc tả với đề thực tế.

Trên thực tế các bước này làm thủ công bằng bảng tính, văn bản. Khi thay một câu hỏi phải sửa cả ma trận, bản đặc tả và đề, nên dễ sai lệch; câu "Đúng – Sai" có bốn ý ở các mức khác nhau càng khó đối chiếu. Các công cụ tạo đề phổ biến chủ yếu lưu câu hỏi và sinh đề ngẫu nhiên, ít gắn câu hỏi với YCCĐ của bài học, chưa xuất được ma trận, bản đặc tả theo mẫu 7991.

Vì vậy đề tài xây dựng website cho nội dung học kì II Vật lí 10, bộ Kết nối tri thức với cuộc sống; mỗi câu hỏi gắn một dòng YCCĐ và một mức độ. Thực hiện hai giai đoạn: giai đoạn 1 xây dựng hoàn chỉnh và thử nghiệm với chủ đề "Năng lượng, công, công suất" (Bài 23 – 27); giai đoạn 2 hoàn thiện các chủ đề còn lại.`,

  'Thông tư 22/2021/TT-BGDĐT': `Đây là căn cứ pháp lí thứ nhất, em trích nguyên văn, phần tô đỏ là em đánh dấu.

Điều 3 — mục đích đánh giá: xác định mức độ hoàn thành nhiệm vụ học tập của học sinh theo YCCĐ; cung cấp thông tin chính xác, kịp thời để học sinh điều chỉnh hoạt động rèn luyện và học tập, cán bộ quản lý giáo dục và giáo viên điều chỉnh hoạt động dạy học.
Điều 4 khoản 1: đánh giá căn cứ vào yêu cầu cần đạt được quy định trong Chương trình giáo dục phổ thông. Đây là lí do đề tài gắn mỗi câu hỏi với một dòng YCCĐ.
Điều 7 khoản 1: với bài kiểm tra đánh giá bằng điểm số, đề kiểm tra được xây dựng dựa trên ma trận, đặc tả của đề kiểm tra, đáp ứng YCCĐ của môn học. Đây là căn cứ trực tiếp nhất cho việc website lập ma trận và bản đặc tả trước rồi mới chọn câu.`,

  'Công văn 7991/BGDĐT-GDTrH': `Căn cứ thứ hai là Công văn 7991 ngày 17/12/2024. Công văn yêu cầu các Sở hướng dẫn trường trung học phổ thông xây dựng ma trận, bản đặc tả, đề kiểm tra và hướng dẫn chấm đề kiểm tra định kì; trong năm học 2024 – 2025 triển khai từ học kì 2.

Phụ lục 1 là mẫu ma trận: phần trắc nghiệm khách quan gồm nhiều lựa chọn, "Đúng – Sai", trả lời ngắn; mỗi dạng chia ba mức Biết, Hiểu, Vận dụng; ví dụ minh họa phân bổ điểm theo mức là 40% – 30% – 30%.
Phụ lục 2 là mẫu bản đặc tả: cột "Yêu cầu cần đạt" ghi YCCĐ theo từng mức Biết, Hiểu, Vận dụng, kèm số câu ở mỗi mức. Website xuất ma trận và bản đặc tả theo đúng hai mẫu này. Phần tự luận trong mẫu chưa thuộc phạm vi đề tài.`,

  'Đánh giá theo YCCĐ và bản đặc tả': `2.1. Black và Wiliam (1998) cho thấy đánh giá trên lớp phát huy tác dụng khi gắn chặt với mục tiêu học tập và cung cấp thông tin để điều chỉnh dạy học. Trong chương trình 2018, mục tiêu này được cụ thể hóa thành YCCĐ; Thông tư 22/2021 quy định đánh giá căn cứ vào YCCĐ. Vì vậy câu hỏi kiểm tra cần truy vết được tới YCCĐ mà nó đo lường; đây là căn cứ để đề tài gắn mỗi câu hỏi với một dòng YCCĐ cụ thể.

2.2. Trong đo lường giáo dục, bảng đặc tả là công cụ hai chiều đối chiếu nội dung với mức độ nhận thức, giúp bài kiểm tra có độ giá trị nội dung và phân bố câu hỏi tương xứng với thời lượng, tầm quan trọng của từng nội dung (Miller, Linn, & Gronlund, 2009). Fives và DiDonato-Barnes (2013) cho rằng lập bảng đặc tả trước khi viết đề giúp tránh đề tập trung quá nhiều vào một số nội dung hoặc một mức độ. Mẫu Công văn 7991 tách thành hai văn bản: ma trận và bản đặc tả; ví dụ minh họa phân bổ điểm Biết – Hiểu – Vận dụng là 40% – 30% – 30%.`,

  'Quy tắc phân loại mức độ câu hỏi': `2.3. Thang phân loại của Bloom (1956) và bản điều chỉnh của Anderson và Krathwohl (2001) là cơ sở lí luận phổ biến cho việc phân mức câu hỏi. Công văn 7991 dùng ba mức Biết, Hiểu, Vận dụng.

Để phân loại câu hỏi Vật lí nhất quán, đề tài dùng quy tắc vận hành do giảng viên hướng dẫn thống nhất:
(1) câu yêu cầu nhắc lại định nghĩa, công thức, đơn vị — mức Biết;
(2) câu định tính, giải thích hiện tượng, so sánh, hoặc biến đổi công thức để suy ra tỉ lệ mà không thay số — mức Hiểu;
(3) câu yêu cầu thay số vào công thức để tính ra giá trị — mức Vận dụng.
Câu trả lời ngắn là bài tập tính toán nên xếp mức Vận dụng. Câu "Đúng – Sai" được xếp mức riêng cho từng ý a, b, c, d.`,

  'Chất lượng câu hỏi, đánh giá công cụ': `2.4. Haladyna, Downing và Rodriguez (2002) tổng hợp các nguyên tắc viết câu trắc nghiệm nhiều lựa chọn, trong đó phương án nhiễu phải hợp lí và hạn chế phương án kiểu "tất cả các phương án trên". Nguyên tắc này được dùng khi rà soát ngân hàng câu hỏi và khi thiết kế chức năng trộn đề: phương án nhắc tới phương án khác, ví dụ "Cả A và B đúng", được giữ nguyên thứ tự.

2.5. Đánh giá một phần mềm hỗ trợ dạy học cần xét cả tính hữu ích và tính dễ sử dụng — hai yếu tố quyết định việc người dùng chấp nhận công nghệ (Davis, 1989). Tính khả dụng đo bằng thang SUS gồm 10 mục (Brooke, 1996) và đánh giá theo các thuộc tính của Nielsen (1993).

Khoảng trống đề tài hướng tới: một công cụ chuyên cho Vật lí 10, trong đó ma trận, bản đặc tả và đề sinh ra từ cùng một nguồn dữ liệu — câu hỏi đã gắn YCCĐ và mức độ — nên luôn khớp nhau và xuất được theo mẫu Công văn 7991.`,

  'Mục tiêu tổng quát và mục tiêu cụ thể': `Mục tiêu tổng quát: xây dựng và đánh giá một website hỗ trợ giáo viên Vật lí lập ma trận, bản đặc tả và biên soạn đề kiểm tra định kì theo Công văn 7991 cho nội dung học kì II môn Vật lí 10 (Kết nối tri thức với cuộc sống); thử nghiệm trước với chủ đề "Năng lượng, công, công suất", sau đó hoàn thiện dần cho các chủ đề còn lại.

Mục tiêu cụ thể:
1. Hệ thống hóa cơ sở lí luận về kiểm tra, đánh giá theo YCCĐ, ma trận và bản đặc tả, phân loại mức độ nhận thức.
2. Xây dựng bộ dữ liệu YCCĐ theo bài và theo ba mức cho các bài học kì II, dựa trên Chương trình môn Vật lí 2018 và sách giáo viên; hoàn thành trước cho Bài 23 – 27.
3. Xây dựng ngân hàng câu hỏi ba dạng (nhiều lựa chọn, "Đúng – Sai", trả lời ngắn), mỗi câu (mỗi ý) gắn YCCĐ và mức độ.
4. Thiết kế và xây dựng website với quy trình: lập ma trận → chọn câu theo YCCĐ → rà soát, xuất ma trận và bản đặc tả → biên soạn, trộn và xuất đề.
5. Thử nghiệm với giáo viên Vật lí; đánh giá tính khả dụng, tính hữu ích và mức độ phù hợp với Công văn 7991.`,

  'Ba câu hỏi đề tài cần trả lời': `Câu hỏi 1: Hệ thống YCCĐ của các chủ đề học kì II môn Vật lí 10 cần được tổ chức như thế nào — theo bài, theo mức độ — để làm căn cứ chọn câu hỏi và lập bản đặc tả? Trả lời qua việc xây dựng bộ YCCĐ ở mục 6.2.

Câu hỏi 2: Quy trình và chức năng nào giúp giáo viên lập được ma trận, bản đặc tả và đề kiểm tra khớp nhau theo mẫu Công văn 7991? Trả lời qua việc thiết kế, phát triển website ở mục 6.4.

Câu hỏi 3: Website có đáp ứng yêu cầu về tính khả dụng, tính hữu ích và có rút ngắn thời gian soạn đề của giáo viên hay không? Trả lời qua khảo sát, thử nghiệm ở mục 6.5 và 6.6.`,

  'Nghiên cứu cái gì, ở đâu, khi nào': `Đối tượng nghiên cứu: quy trình lập ma trận, bản đặc tả và biên soạn đề kiểm tra định kì học kì II môn Vật lí 10 theo Công văn 7991; website hỗ trợ quy trình này.
Đối tượng khảo sát, thử nghiệm: giáo viên dạy Vật lí cấp trung học phổ thông; có thể mở rộng tới sinh viên năm cuối ngành Sư phạm Vật lí.

Phạm vi nội dung: học kì II Vật lí 10 (Kết nối tri thức với cuộc sống) gồm "Năng lượng, công, công suất" (Bài 23 – 27), "Động lượng" (Bài 28 – 30), "Chuyển động tròn" (Bài 31 – 32) và "Biến dạng của vật rắn. Áp suất chất lỏng" (Bài 33 – 34). Do mỗi nhà trường tự xây dựng kế hoạch dạy học (BGDĐT, 2020), ranh giới học kì có thể khác nhau giữa các trường; đề tài lấy các chủ đề trên làm phạm vi.
Phạm vi thử nghiệm: giai đoạn 1 với chủ đề Năng lượng; giai đoạn 2 mở rộng khi dữ liệu hoàn thiện.
Dạng câu hỏi: ba dạng trắc nghiệm khách quan; phần tự luận chưa thuộc phạm vi.
Không gian: Trường Đại học An Giang và một số trường trung học phổ thông vùng đồng bằng sông Cửu Long. Thời gian: năm học 2026 – 2027, từ tháng 9/2026 đến tháng 4/2027.`,

  'Sáu bước thực hiện đề tài': `6.1. Nghiên cứu tài liệu: Chương trình môn Vật lí 2018, Thông tư 22/2021, Công văn 7991, sách giáo khoa và sách giáo viên Vật lí 10, cùng tài liệu về bảng đặc tả và phân loại mức độ. Do các trường tự xây dựng kế hoạch dạy học, đề tài lấy YCCĐ của chương trình và mục tiêu bài học trong sách giáo viên làm căn cứ, thay cho một "phân phối chương trình" chung.
6.2. Xây dựng bộ YCCĐ theo bài, theo ba mức.
6.3. Xây dựng ngân hàng câu hỏi: sưu tầm, tổng hợp, bổ sung câu cho dòng YCCĐ còn thiếu; thống kê theo dòng YCCĐ để phát hiện dòng chưa có hoặc có quá ít câu. Câu nhiều lựa chọn, trả lời ngắn gắn một YCCĐ và một mức; câu "Đúng – Sai" gắn cho từng ý.
6.4. Website phát triển theo hướng lặp: xây từng chức năng, lấy ý kiến giảng viên hướng dẫn và giáo viên, rồi điều chỉnh. Dùng React, TypeScript, Vite, Supabase, KaTeX; ma trận, bản đặc tả, đề xuất ra PDF, đề còn xuất được LaTeX; có kiểm thử tự động cho phần tính toán.
6.5 và 6.6: khảo sát, thử nghiệm và phân tích dữ liệu — em trình bày ở slide sau.`,

  'Bộ YCCĐ và việc sử dụng AI': `Mỗi bài học được mô tả bằng các dòng YCCĐ ở ba mức. Dòng YCCĐ lấy nguyên văn mục tiêu bài học trong sách giáo viên; phần nào sách giáo viên chưa đủ thì bổ sung bằng YCCĐ tương ứng của chương trình 2018 — ví dụ dòng "Nêu được biểu thức tính công… Tính được công trong một số trường hợp đơn giản" trong ảnh trích. Với chủ đề Năng lượng, bộ YCCĐ gồm 40 dòng cho năm bài: 20 dòng từ sách giáo viên, 6 dòng từ chương trình 2018, 8 dòng YCCĐ của chủ đề trước dùng khi câu hỏi kiểm tra kiến thức nền, 6 dòng tự đề xuất.

Về trí tuệ nhân tạo: website không tích hợp AI và không tự sinh nội dung đề khi giáo viên sử dụng. Trong quá trình xây dựng, mô hình Claude (Anthropic, 2026) được dùng để hỗ trợ: soạn 91 câu hỏi bổ sung, chiếm 22,2% ngân hàng chủ đề Năng lượng; đề xuất gắn YCCĐ và mức độ; hỗ trợ lập trình. Mọi câu hỏi và mọi kết quả phân loại đều được em rà soát; câu do AI hỗ trợ được ghi chú "Câu do AI hỗ trợ biên soạn".`,

  'Khảo sát, thử nghiệm và đánh giá': `Tiến trình: khảo sát nhu cầu bằng bảng hỏi về khó khăn khi lập ma trận, bản đặc tả theo Công văn 7991 (tháng 12/2026). Thử nghiệm giai đoạn 1 (12/2026 – 1/2027): giáo viên dùng website lập một ma trận và một đề kiểm tra định kì cho chủ đề Năng lượng; ghi nhận thời gian thực hiện và các lỗi gặp phải; kết quả dùng để điều chỉnh website. Thử nghiệm giai đoạn 2 (2 – 3/2027): lặp lại với đề gồm nhiều chủ đề học kì II.

Công cụ đánh giá: thang SUS (Brooke, 1996) cho tính khả dụng; câu hỏi về tính hữu ích và tính dễ sử dụng dựa trên mô hình chấp nhận công nghệ TAM (Davis, 1989); phỏng vấn ngắn về mức độ phù hợp với Công văn 7991.

Phân tích: dữ liệu định lượng xử lí bằng thống kê mô tả (tần số, tỉ lệ, trung bình, độ lệch chuẩn); điểm SUS quy đổi về thang 0 – 100; ý kiến định tính mã hóa theo chủ đề để rút ra đề xuất hoàn thiện website.`,

  'Website: bốn bước soạn đề': `Đến thời điểm lập đề cương, giai đoạn 1 đã hoàn thành phần xây dựng. Website triển khai ở địa chỉ kholuutru.vercel.app; giáo viên mở đường dẫn là vào thẳng màn hình lập ma trận, không cần tài khoản; chức năng quản lí ngân hàng câu hỏi chỉ dành cho quản trị viên.

Bước 1, lập ma trận: nhập số câu theo bài × dạng câu hỏi × mức độ; câu trả lời ngắn chỉ có mức Vận dụng; câu "Đúng – Sai" nhập theo số câu, các ý tự vào mức của chúng. Website tự chia điểm mỗi câu thành số tròn 0,25 theo thang 10 (câu "Đúng – Sai" 1 điểm), giáo viên sửa được.
Bước 2, chọn câu theo YCCĐ: theo từng bài, câu hỏi nhóm theo mức và dòng YCCĐ; nút "Gợi ý chọn câu" chọn đủ số câu, ưu tiên phủ nhiều dòng YCCĐ; giáo viên đổi được từng câu.
Bước 3, rà soát và xuất: màn hình chia đôi gồm ma trận, bản đặc tả theo mẫu 7991 và đề bài; sửa câu chữ YCCĐ, tách câu ra dòng YCCĐ riêng; in hoặc lưu PDF.
Bước 4, biên soạn đề: tùy chỉnh trình bày, cỡ hình; trộn nhiều mã đề (đổi thứ tự câu trong từng phần, đổi chỗ phương án A – D); xuất PDF, LaTeX kèm bảng đáp án và bảng đối chiếu với đề gốc.`,

  'Ngân hàng câu hỏi chủ đề Năng lượng': `Bảng 2 trong đề cương: ngân hàng chủ đề "Năng lượng, công, công suất" có 409 câu — 274 câu nhiều lựa chọn, 97 câu "Đúng – Sai", 38 câu trả lời ngắn. Theo bài: Bài 23 có 125 câu, Bài 24 có 66, Bài 25 có 86, Bài 26 có 78, Bài 27 có 52; còn 2 câu chưa gắn YCCĐ. Số liệu theo bản xuất ngân hàng ngày 22/11/2026; mỗi câu "Đúng – Sai" gồm 4 ý.`,

  'Phân bố mức độ trong ngân hàng': `Bảng 3: câu nhiều lựa chọn có 97 câu Biết, 99 câu Hiểu, 78 câu Vận dụng; ý "Đúng – Sai" có 30 ý Biết, 137 ý Hiểu, 221 ý Vận dụng; câu trả lời ngắn có 38 câu, đều ở mức Vận dụng.

Số liệu cho thấy ngân hàng đủ để lập đề theo cấu trúc phổ biến: 18 câu nhiều lựa chọn, 4 câu "Đúng – Sai", 6 câu trả lời ngắn. 407/409 câu đã gắn YCCĐ; hai câu chưa gắn có nội dung vượt yêu cầu của chương trình nên không đưa vào đề. Với các chủ đề còn lại, ngân hàng đã có một số câu nhưng chưa gắn YCCĐ theo bài; số liệu cụ thể sẽ thống kê ở giai đoạn 2.`,

  'Khóa luận dự kiến gồm năm chương': `Theo Quy định trình bày của Trường Đại học An Giang, khóa luận dự kiến gồm năm chương:
Chương 1. Giới thiệu: tính cần thiết, mục tiêu, đối tượng, nội dung và đóng góp của đề tài.
Chương 2. Tổng quan vấn đề nghiên cứu: kiểm tra, đánh giá theo YCCĐ; ma trận, bản đặc tả theo Công văn 7991; phân loại mức độ nhận thức; các công cụ hỗ trợ soạn đề hiện có; câu hỏi nghiên cứu.
Chương 3. Phương pháp nghiên cứu: xây dựng bộ YCCĐ và ngân hàng câu hỏi; thiết kế, phát triển website; mẫu, công cụ và tiến trình thử nghiệm; phân tích dữ liệu.
Chương 4. Kết quả và thảo luận: sản phẩm website và dữ liệu của từng chủ đề; kết quả thử nghiệm giai đoạn 1 và 2; thảo luận hiệu quả và hạn chế.
Chương 5. Kết luận và khuyến nghị.

Đóng góp dự kiến: (1) bộ YCCĐ theo bài, theo ba mức cho học kì II cùng quy tắc phân mức cho câu hỏi Vật lí; (2) ngân hàng câu hỏi ba dạng đã gắn YCCĐ, mức độ — hiện có 409 câu cho chủ đề Năng lượng; (3) website giúp ma trận, bản đặc tả và đề luôn khớp nhau, xuất theo mẫu 7991; quy trình xây dựng dữ liệu theo chủ đề áp dụng được cho học kì I và các khối lớp khác.`,

  'Kế hoạch thực hiện đề tài': `Bảng 4: (1) nghiên cứu tài liệu, viết đề cương: 9 – 11/2026; (2) giai đoạn 1 — website, bộ YCCĐ và ngân hàng câu hỏi chủ đề Năng lượng: 9 – 11/2026, đã hoàn thành phần chính; (3) khảo sát nhu cầu giáo viên, hoàn thiện công cụ đánh giá: 12/2026; (4) thử nghiệm giai đoạn 1, điều chỉnh website: 12/2026 – 1/2027; (5) giai đoạn 2 — xây dựng bộ YCCĐ, gắn YCCĐ và bổ sung câu cho "Động lượng", "Chuyển động tròn", "Biến dạng của vật rắn": 12/2026 – 2/2027; (6) thử nghiệm giai đoạn 2, phân tích dữ liệu: 2 – 3/2027; (7) viết khóa luận, nộp và bảo vệ: 3 – 4/2027.`,

  'Tài liệu tham khảo chính': `Đây là các tài liệu chính em dẫn trong phần tổng quan; danh mục đầy đủ 20 tài liệu có trong đề cương, trình bày theo Quy định của Trường.`,

  'cam-on': `Em xin chân thành cảm ơn quý thầy cô đã lắng nghe. Em rất mong nhận được góp ý của hội đồng để đề tài được hoàn thiện hơn.`,
};
