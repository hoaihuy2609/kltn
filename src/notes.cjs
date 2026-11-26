// Ghi chú người nói: lời trình bày bổ sung cho các ý trên slide (theo nội dung đề cương).
// Khoá là tiêu đề slide (hoặc id của slide bìa, slide cảm ơn).

module.exports = {
  'bia': `Kính thưa quý thầy cô trong hội đồng. Em là Nguyễn Trần Hoài Huy, sinh viên ngành Sư phạm Vật lý, Khoa Sư phạm, Trường Đại học An Giang.

Hôm nay em xin báo cáo đề cương khóa luận tốt nghiệp với đề tài: "Xây dựng website hỗ trợ giáo viên trong việc biên soạn đề kiểm tra Vật lí 10 nhằm đánh giá năng lực học sinh ở học kì II", dưới sự hướng dẫn của thầy TS. Trần Quốc Duyệt.

Bài báo cáo đi theo đúng mười mục của đề cương; phần em xin được nhấn mạnh là phần kết quả bước đầu, vì website và dữ liệu của chủ đề "Năng lượng, công, công suất" đã được xây dựng xong.`,

  'Vì sao cần một website hỗ trợ biên soạn đề?': `Thứ nhất, yêu cầu đổi mới kiểm tra, đánh giá. Chương trình giáo dục phổ thông 2018 chuyển trọng tâm từ truyền thụ kiến thức sang hình thành phẩm chất, năng lực; mỗi môn học được mô tả bằng hệ thống yêu cầu cần đạt cho từng mạch nội dung. Vì vậy kiểm tra, đánh giá phải căn cứ vào yêu cầu cần đạt chứ không chỉ vào nội dung sách giáo khoa, và đề kiểm tra định kì phải được xây dựng dựa trên ma trận, bản đặc tả.

Thứ hai, quy trình thủ công dễ sai lệch. Hiện nay giáo viên thường làm bằng Word hoặc Excel: lập ma trận, chép YCCĐ vào bản đặc tả, tìm câu hỏi từ nhiều nguồn, đánh số câu, tính lại điểm và tỉ lệ. Chỉ cần thay một câu hỏi là phải sửa lại cả ma trận, bản đặc tả và đề. Riêng câu "Đúng – Sai" có bốn ý, mỗi ý có thể ở một mức độ khác nhau, nên việc đối chiếu càng phức tạp.

Thứ ba, nhu cầu liên kết câu hỏi với YCCĐ. Các công cụ tạo đề phổ biến hiện nay chủ yếu lưu câu hỏi và sinh đề ngẫu nhiên, ít gắn câu hỏi với YCCĐ của từng bài học và chưa xuất được ma trận, bản đặc tả theo mẫu Công văn 7991.

Giải pháp của đề tài là một nguồn dữ liệu cho cả ba tài liệu: mỗi câu hỏi được gắn với một dòng YCCĐ và một mức độ, nên ma trận, bản đặc tả và đề được lập đồng bộ, luôn khớp nhau. Đề tài làm hai giai đoạn: giai đoạn 1 với chủ đề "Năng lượng, công, công suất" (Bài 23 – 27), giai đoạn 2 với các chủ đề còn lại của học kì II.

Căn cứ của các yêu cầu này nằm ở Thông tư 22 và Công văn 7991, em xin trình bày ở slide tiếp theo.`,

  'Thông tư 22/2021 và Công văn 7991': `Căn cứ thứ nhất là Thông tư 22/2021/TT-BGDĐT ngày 20/7/2021 quy định về đánh giá học sinh trung học cơ sở và trung học phổ thông. Khoản 1 Điều 4 quy định đánh giá căn cứ vào yêu cầu cần đạt được quy định trong Chương trình giáo dục phổ thông; Điều 3 nêu kết quả đánh giá còn dùng để giáo viên điều chỉnh hoạt động dạy học. Khoản 1 Điều 7 quy định với bài kiểm tra định kì đánh giá bằng điểm số, đề kiểm tra được xây dựng dựa trên ma trận, đặc tả, đáp ứng yêu cầu cần đạt của môn học. Đây là căn cứ để đề tài gắn mỗi câu hỏi với một dòng YCCĐ và lập ma trận, bản đặc tả trước khi chọn câu.

Căn cứ thứ hai là Công văn 7991/BGDĐT-GDTrH ngày 17/12/2024. Công văn đề nghị Sở Giáo dục và Đào tạo hướng dẫn các trường trung học phổ thông xây dựng ma trận, bản đặc tả, đề kiểm tra và hướng dẫn chấm đề kiểm tra định kì, triển khai từ học kì II năm học 2024 – 2025. Phụ lục kèm theo có mẫu ma trận với ba dạng trắc nghiệm khách quan — nhiều lựa chọn, "Đúng – Sai", trả lời ngắn — mỗi dạng chia ba mức Biết, Hiểu, Vận dụng; ví dụ minh họa phân bổ điểm theo mức là 40 – 30 – 30. Mẫu bản đặc tả ghi rõ YCCĐ theo từng mức và số câu tương ứng. Website xuất ma trận và bản đặc tả theo đúng hai mẫu này; phần tự luận chưa thuộc phạm vi đề tài.

(Phần tô đỏ trong ảnh là em đánh dấu; có thể chạm vào ảnh để phóng to.)`,

  'Cơ sở lí luận của đề tài': `2.1. Theo Black và Wiliam, đánh giá trên lớp phát huy tác dụng khi gắn chặt với mục tiêu học tập và cung cấp thông tin để điều chỉnh dạy học. Trong chương trình 2018, mục tiêu này được cụ thể hóa thành YCCĐ, và Thông tư 22 quy định đánh giá căn cứ vào YCCĐ. Vì vậy câu hỏi kiểm tra cần truy vết được tới YCCĐ mà nó đo lường.

2.2. Trong đo lường giáo dục, bảng đặc tả là công cụ hai chiều đối chiếu nội dung với mức độ nhận thức, giúp bài kiểm tra có độ giá trị nội dung và phân bố câu hỏi tương xứng với tầm quan trọng của từng nội dung (Miller, Linn và Gronlund). Fives và DiDonato-Barnes cho rằng lập bảng đặc tả trước khi viết đề giúp đề không dồn vào một số nội dung hoặc một mức độ.

2.3. Cơ sở phân mức là thang Bloom và bản điều chỉnh của Anderson và Krathwohl; Công văn 7991 sử dụng ba mức Biết, Hiểu, Vận dụng. Để phân loại câu hỏi Vật lí nhất quán, đề tài dùng quy tắc do giảng viên hướng dẫn thống nhất: câu nhắc lại định nghĩa, công thức, đơn vị là Biết; câu định tính, giải thích hiện tượng, so sánh, hoặc biến đổi công thức để suy ra tỉ lệ mà không thay số là Hiểu; câu thay số vào công thức để tính ra giá trị là Vận dụng. Câu trả lời ngắn là bài tập tính toán nên xếp mức Vận dụng; câu "Đúng – Sai" được xếp mức cho từng ý.

2.4 – 2.5. Haladyna và cộng sự tổng hợp nguyên tắc viết câu trắc nghiệm: phương án nhiễu phải hợp lí, hạn chế phương án kiểu "tất cả các phương án trên"; nguyên tắc này được dùng khi rà soát ngân hàng câu hỏi và khi trộn đề — phương án nhắc tới phương án khác như "Cả A và B đúng" được giữ nguyên thứ tự. Để đánh giá website, đề tài dựa vào mô hình chấp nhận công nghệ của Davis (tính hữu ích, tính dễ sử dụng), thang SUS của Brooke và các thuộc tính khả dụng của Nielsen.

Khoảng trống mà đề tài hướng tới là một công cụ chuyên cho Vật lí 10, trong đó ma trận, bản đặc tả và đề sinh ra từ cùng một nguồn dữ liệu nên luôn khớp nhau và xuất được theo mẫu Công văn 7991.`,

  'Đề tài làm gì và trả lời câu hỏi nào?': `Mục tiêu tổng quát của đề tài là xây dựng và đánh giá một website hỗ trợ giáo viên Vật lí lập ma trận, bản đặc tả và biên soạn đề kiểm tra định kì theo Công văn 7991 cho học kì II Vật lí 10, bộ Kết nối tri thức với cuộc sống; thử nghiệm trước với chủ đề "Năng lượng, công, công suất", sau đó hoàn thiện dần các chủ đề còn lại.

Năm mục tiêu cụ thể:
(1) hệ thống hóa cơ sở lí luận về kiểm tra, đánh giá theo YCCĐ, ma trận, bản đặc tả và phân loại mức độ nhận thức;
(2) xây dựng bộ YCCĐ theo bài và theo ba mức, dựa trên chương trình 2018 và sách giáo viên, hoàn thành trước cho Bài 23 – 27;
(3) xây dựng ngân hàng câu hỏi ba dạng, mỗi câu (mỗi ý) gắn YCCĐ và mức độ;
(4) xây dựng website theo quy trình: lập ma trận → chọn câu theo YCCĐ → rà soát, xuất ma trận và bản đặc tả → biên soạn, trộn và xuất đề;
(5) thử nghiệm với giáo viên Vật lí, đánh giá tính khả dụng, tính hữu ích và mức độ phù hợp với Công văn 7991.

Ba câu hỏi nghiên cứu tương ứng với ba phần việc chính: câu hỏi 1 được trả lời qua việc xây dựng bộ YCCĐ (mục 6.2); câu hỏi 2 qua việc thiết kế, phát triển website (mục 6.4); câu hỏi 3 qua khảo sát và thử nghiệm với giáo viên (mục 6.5, 6.6).`,

  'Nghiên cứu cái gì, ở đâu, khi nào': `Đối tượng nghiên cứu là quy trình lập ma trận, bản đặc tả và biên soạn đề kiểm tra định kì học kì II môn Vật lí 10 theo Công văn 7991, cùng website hỗ trợ quy trình này. Đối tượng khảo sát, thử nghiệm là giáo viên dạy Vật lí cấp trung học phổ thông; có thể mở rộng tới sinh viên năm cuối ngành Sư phạm Vật lí.

Phạm vi nội dung gồm bốn chủ đề học kì II của Vật lí 10, bộ Kết nối tri thức với cuộc sống: "Năng lượng, công, công suất" (Bài 23 – 27), "Động lượng" (Bài 28 – 30), "Chuyển động tròn" (Bài 31 – 32) và "Biến dạng của vật rắn. Áp suất chất lỏng" (Bài 33 – 34). Do mỗi nhà trường tự xây dựng kế hoạch dạy học theo Công văn 5512, ranh giới học kì có thể khác nhau giữa các trường; đề tài lấy bốn chủ đề này làm phạm vi.

Giai đoạn 1 thử nghiệm đầy đủ với chủ đề "Năng lượng, công, công suất"; giai đoạn 2 mở rộng sang các chủ đề còn lại khi dữ liệu hoàn thiện. Đề tài làm ba dạng trắc nghiệm khách quan; phần tự luận chưa thuộc phạm vi. Không gian thực hiện là Trường Đại học An Giang và một số trường trung học phổ thông vùng đồng bằng sông Cửu Long; thời gian là năm học 2026 – 2027, từ tháng 9/2026 đến tháng 4/2027.`,

  'Sáu bước thực hiện đề tài': `6.1. Nghiên cứu tài liệu: phân tích Chương trình môn Vật lí 2018, Thông tư 22, Công văn 7991, sách giáo khoa và sách giáo viên Vật lí 10. Vì các trường tự xây dựng kế hoạch dạy học, đề tài lấy YCCĐ của chương trình và mục tiêu bài học trong sách giáo viên làm căn cứ, thay cho một "phân phối chương trình" chung.

6.2. Xây dựng bộ YCCĐ: mỗi bài được mô tả bằng các dòng YCCĐ ở ba mức; dòng YCCĐ lấy nguyên văn mục tiêu bài học trong sách giáo viên, phần chưa đủ bổ sung bằng YCCĐ tương ứng của chương trình 2018.

6.3. Xây dựng ngân hàng câu hỏi: sưu tầm, tổng hợp và bổ sung câu cho các dòng YCCĐ còn thiếu; thống kê theo dòng YCCĐ để phát hiện dòng chưa có hoặc có quá ít câu. Câu nhiều lựa chọn và trả lời ngắn gắn một YCCĐ và một mức; câu "Đúng – Sai" gắn cho từng ý a, b, c, d.

6.4. Phát triển website theo hướng lặp: xây từng chức năng, lấy ý kiến giảng viên hướng dẫn và giáo viên rồi điều chỉnh. Website dùng React, TypeScript, Vite, Supabase và KaTeX; có kiểm thử tự động cho các phần tính toán như phân bổ câu, chia điểm, ghép bản đặc tả, trộn đề.

6.5. Khảo sát nhu cầu giáo viên; thử nghiệm giai đoạn 1: giáo viên dùng website lập một ma trận và một đề cho chủ đề Năng lượng, ghi nhận thời gian và lỗi gặp phải; giai đoạn 2 lặp lại với đề gồm nhiều chủ đề. Công cụ đánh giá là thang SUS cho tính khả dụng, câu hỏi theo mô hình TAM cho tính hữu ích và dễ sử dụng, và phỏng vấn ngắn về mức độ phù hợp với Công văn 7991.

6.6. Dữ liệu định lượng xử lí bằng thống kê mô tả (tần số, tỉ lệ, trung bình, độ lệch chuẩn); điểm SUS quy đổi về thang 0 – 100; ý kiến định tính mã hóa theo chủ đề để rút ra đề xuất hoàn thiện website.`,

  'Website: bốn bước soạn đề': `Đến thời điểm lập đề cương, giai đoạn 1 đã hoàn thành phần xây dựng. Website triển khai tại kholuutru.vercel.app; giáo viên mở đường dẫn là vào thẳng màn hình lập ma trận, không cần tài khoản; chức năng quản lí ngân hàng câu hỏi chỉ dành cho quản trị viên.

Bước 1, lập ma trận: giáo viên nhập số câu theo bài × dạng câu hỏi × mức độ. Câu trả lời ngắn chỉ có mức Vận dụng; câu "Đúng – Sai" nhập theo số câu, các ý tự vào mức của chúng. Website tự chia điểm mỗi câu thành số tròn 0,25 theo thang 10, câu "Đúng – Sai" 1 điểm; giáo viên sửa được.

Bước 2, chọn câu theo YCCĐ: theo từng bài, câu hỏi được nhóm theo mức và dòng YCCĐ; nút "Gợi ý chọn câu" chọn đủ số câu, ưu tiên phủ nhiều dòng YCCĐ; giáo viên đổi được từng câu.

Bước 3, rà soát và xuất: màn hình chia đôi gồm bản ma trận, bản đặc tả theo mẫu Công văn 7991 và đề bài; giáo viên sửa được câu chữ YCCĐ, in hoặc lưu PDF.

Bước 4, biên soạn đề: tùy chỉnh trình bày; trộn thành nhiều mã đề bằng cách đổi thứ tự câu trong từng phần và đổi chỗ phương án A – D; xuất PDF, LaTeX kèm bảng đáp án.`,

  'Ngân hàng câu hỏi chủ đề Năng lượng': `Theo bản xuất ngày 22/11/2026, ngân hàng câu hỏi chủ đề "Năng lượng, công, công suất" có 409 câu: 274 câu nhiều lựa chọn, 97 câu "Đúng – Sai" và 38 câu trả lời ngắn; mỗi câu "Đúng – Sai" gồm 4 ý.

Phân theo bài: Bài 23 "Năng lượng. Công cơ học" có 125 câu, Bài 24 "Công suất" 66 câu, Bài 25 "Động năng, thế năng" 86 câu, Bài 26 "Cơ năng và định luật bảo toàn cơ năng" 78 câu, Bài 27 "Hiệu suất" 52 câu.

407 trên 409 câu đã được gắn YCCĐ và mức độ. Hai câu chưa gắn là những câu có nội dung vượt yêu cầu của chương trình nên không được đưa vào đề.`,

  'Mức độ câu hỏi, bộ YCCĐ và việc dùng AI': `Về phân bố mức độ: câu nhiều lựa chọn có 97 câu Biết, 99 câu Hiểu, 78 câu Vận dụng; ý "Đúng – Sai" có 30 ý Biết, 137 ý Hiểu, 221 ý Vận dụng; câu trả lời ngắn có 38 câu, đều ở mức Vận dụng. Như vậy ngân hàng đủ để lập đề theo cấu trúc phổ biến gồm 18 câu nhiều lựa chọn, 4 câu "Đúng – Sai" và 6 câu trả lời ngắn.

Về bộ YCCĐ: chủ đề Năng lượng có 40 dòng cho năm bài — 20 dòng lấy nguyên văn từ sách giáo viên, 6 dòng từ chương trình 2018, 8 dòng YCCĐ của chủ đề trước dùng khi câu hỏi kiểm tra kiến thức nền, và 6 dòng tự đề xuất.

Về sử dụng trí tuệ nhân tạo: website không tích hợp AI và không tự sinh nội dung đề khi giáo viên sử dụng. Trong quá trình xây dựng, mô hình Claude được dùng để hỗ trợ soạn 91 câu hỏi bổ sung, chiếm 22,2% ngân hàng chủ đề Năng lượng; đề xuất gắn YCCĐ và mức độ; và hỗ trợ lập trình. Mọi câu hỏi và mọi kết quả phân loại đều được em rà soát; các câu do AI hỗ trợ được ghi chú "Câu do AI hỗ trợ biên soạn".

Với các chủ đề còn lại, ngân hàng đã có một số câu nhưng chưa gắn YCCĐ theo bài; số liệu cụ thể sẽ được thống kê ở giai đoạn 2.`,

  'Khóa luận dự kiến gồm năm chương': `Theo Quy định trình bày của Trường Đại học An Giang, khóa luận dự kiến gồm năm chương:
Chương 1, Giới thiệu: tính cần thiết, mục tiêu, đối tượng, nội dung và đóng góp của đề tài.
Chương 2, Tổng quan vấn đề nghiên cứu: kiểm tra, đánh giá theo YCCĐ; ma trận, bản đặc tả theo Công văn 7991; phân loại mức độ nhận thức; các công cụ hỗ trợ soạn đề hiện có; câu hỏi nghiên cứu.
Chương 3, Phương pháp nghiên cứu: xây dựng bộ YCCĐ và ngân hàng câu hỏi; thiết kế, phát triển website; mẫu, công cụ và tiến trình thử nghiệm; phân tích dữ liệu.
Chương 4, Kết quả và thảo luận: sản phẩm website và dữ liệu của từng chủ đề; kết quả thử nghiệm hai giai đoạn; thảo luận hiệu quả và hạn chế.
Chương 5, Kết luận và khuyến nghị.

Đề tài dự kiến có ba đóng góp: thứ nhất, bộ YCCĐ theo bài và theo ba mức cho học kì II cùng quy tắc phân mức áp dụng cho câu hỏi Vật lí; thứ hai, ngân hàng câu hỏi ba dạng đã gắn YCCĐ và mức độ, hiện có 409 câu cho chủ đề "Năng lượng, công, công suất"; thứ ba, website giúp ma trận, bản đặc tả và đề luôn khớp nhau, xuất theo mẫu Công văn 7991, và quy trình xây dựng dữ liệu theo chủ đề có thể áp dụng cho học kì I và các khối lớp khác.`,

  'Kế hoạch thực hiện đề tài': `Kế hoạch gồm bảy bước:
(1) nghiên cứu tài liệu, viết đề cương: tháng 9 – 11/2026;
(2) giai đoạn 1 — xây dựng website, bộ YCCĐ và ngân hàng câu hỏi chủ đề Năng lượng: tháng 9 – 11/2026, đến nay đã hoàn thành phần chính;
(3) khảo sát nhu cầu giáo viên, hoàn thiện công cụ đánh giá: tháng 12/2026;
(4) thử nghiệm giai đoạn 1 với giáo viên, điều chỉnh website: tháng 12/2026 – 1/2027;
(5) giai đoạn 2 — xây dựng bộ YCCĐ, gắn YCCĐ và bổ sung câu hỏi cho các chủ đề "Động lượng", "Chuyển động tròn", "Biến dạng của vật rắn": tháng 12/2026 – 2/2027;
(6) thử nghiệm giai đoạn 2, phân tích dữ liệu: tháng 2 – 3/2027;
(7) viết khóa luận, nộp và bảo vệ: tháng 3 – 4/2027.

Phần trình bày của em đến đây là hết.`,

  'cam-on': `Em xin chân thành cảm ơn quý thầy cô đã lắng nghe. Em rất mong nhận được những góp ý của hội đồng để đề tài được hoàn thiện hơn.`,
};
