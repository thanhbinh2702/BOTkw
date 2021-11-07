/** Hầu hết mấy ông dùng bypass module donate thì chả cần dùng cái này đâu vì tội gì mà không dùng mấy module xịn hơn đúng k =))**/
/** Đổi Credit ? Nếu bạn không có văn hóa như Hà Mạc Trường Giang ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "rules",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "Thì là luật đó",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Luật của Clan:
⚠ Vui lòng chấp hành nghiêm chỉnh để tránh bị đưa về với đất tổ
1: Đua đội ít nhất 1/2 vào thứ 7 và Chủ nhật lúc 7h55
2: Không gây war với các thành viên
3: Không hack, bú và liếm dưới mọi hình thức
4: Tôn trọng Boss cùng các QTV
5: Xin vô được thì xin ra được `, event.threadID, event.messageID);