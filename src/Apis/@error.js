// 전역 에러관리 errorBoundary 를 사용해서.
// axios interceptor 로 쓸수도있다. --> 인터셉터에도 토큰은있음.
// 정리필요함.

class ApiCustomError extends Error {
	constructor(message, status) {
		super(message);
		this.status = status;

		if (status === 403) {
			//로그아웃
			window.location.href = '/';
			this.message = '세션이 만료되었습니다.';
		}

		if (status === 404) {
			//404페이지로 이동하는 로직
			this.message = '존재하지 않는 페이지입니다..';
		}

		// .... 설계에 대한 내용
	}
}

export default ApiCustomError;
