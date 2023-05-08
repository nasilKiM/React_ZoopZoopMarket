// form type 설정
export const FORM_TYPE = {
	EMAIL: {
		required: 'email을 입력해주세요',
		pattern: {
			value:
				/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
			message: 'email 형식에 맞지 않습니다',
		},
	},

	PASSWORD: {
		required: '비밀번호를 입력해주세요',
		maxLength: { value: 20, message: '최대 20글자입니다' },
		minLength: {
			value: 8,
			message: '최소 8글자 이상 비밀번호를 사용하세요.',
		},
		pattern: {
			value: /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
			message: '특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요',
		},
	},

	PASSWORD_simple: {
		required: true,
		pattern: {
			message: '비밀번호가 일치하지 않습니다.',
		},
	},

	PASSWORD_CHECK: {
		required: true,
		validate: value => {
			if (watch('password') !== value) {
				return '비밀번호를 다시 확인해 주세요';
			}
		},
	},

	NICKNAME: {
		required: true,
		pattern: {
			message: '닉네임을 입력해주세요',
		},
	},

	PHONE: {
		required: '전화번호를 입력해주세요',
		pattern: {
			value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
			message: '000-0000-0000 형태로 입력해주세요',
		},
	},
};
