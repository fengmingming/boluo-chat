export function formatTimestamp(timestamp) {
	// 创建一个 Date 对象用于表示给定的时间戳
	const date = new Date(timestamp);
	// 创建一个 Date 对象用于表示当前时间
	const now = new Date();
	
	// 获取年份、月份（注意：JavaScript 的月份是从0开始的）、日期、星期几、小时和分钟
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const weekday = date.getDay(); // 星期天是 0, 星期一是 1, 以此类推
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');

	// 获取当前时间的年份、月份和日期
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth() + 1;
	const currentDate = now.getDate();

	// 计算今天的开始时间和明天的开始时间
	const todayStart = new Date(now.setHours(0, 0, 0, 0)).getTime();
	const tomorrowStart = todayStart + 24 * 60 * 60 * 1000;

	// 判断是否为同一天
	if (timestamp >= todayStart && timestamp < tomorrowStart) {
		return `${hours}:${minutes}`;
	}

	// 计算一周的开始时间（假设周日是一周的开始）
	const weekStart = new Date(now.setDate(now.getDate() - now.getDay())).setHours(0, 0, 0, 0);

	// 判断是否在同一周内（包括今天）
	if (timestamp >= weekStart) {
		const daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
		return daysOfWeek[weekday];
	}

	// 判断是否为同一年
	if (year === currentYear) {
		return `${month}月${day}日`;
	}

	// 如果不是同一年，则返回完整的日期格式
	return `${year}年${month}月${day}日`;
}