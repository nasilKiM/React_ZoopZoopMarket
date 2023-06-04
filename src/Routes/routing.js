import { createBrowserRouter } from 'react-router-dom';

import PrivateRoute from './private';

import LandingPage from '../Pages/Landing/index';
import MarketPricePage from '../Pages/MarketPrice';
import MyPage from '../Pages/MyPage';
import MyItemPage from '../Pages/MyPage/MyItem/myItem';
import SearchListPage from '../Pages/SearchList';
import ItemDetailPage from 'Pages/ItemDetail';
import RegisterPage from 'Pages/Register';
import MyInterestPage from 'Pages/MyPage/MyInterest/myInterest';
import AccountBookPage from 'Pages/MyPage/MyAccountBook';
import MainPage from 'Pages/Main';
import ReviewPage from 'Pages/Review';
import YourProfile from 'Pages/YourProfile';
import WholeListPage from 'Pages/SearchList/components/wholeList';
import MyPasswordEdit from 'Pages/MyPage/MyUserEdit/MyPasswordEdit/myPasswordEdit';
import MyUserEdit from 'Pages/MyPage/MyUserEdit/myUserEdit';
import MyReview from 'Pages/MyPage/MyReview/MyReview';
import ChattingPage from 'Pages/Chat';
import ReviewDetail from 'Pages/Review/reviewDetail';
import ReviewEditPage from 'Pages/Review/reviewEdit';
import LayOut from '../Components/Layout';
import ErrorPage from 'Error';
import ScrollToTop from 'Components/ScrollToTop/ScrollToTop';
import LoginPage from 'Pages/Landing/Form/Login/LoginPage';
import SignUpPage from 'Pages/Landing/Form/SignUp/SignUpPage';

const router = createBrowserRouter([
	{
		path: '',
		element: <LandingPage />,
	},

	{
		path: 'form/login',
		element: <LoginPage />,
	},
	{
		path: 'form/signup',
		element: <SignUpPage />,
	},

	{
		element: (
			<PrivateRoute>
				<ScrollToTop />
				<LayOut />
			</PrivateRoute>
		),
		children: [
			{
				path: 'chat',
				element: <ChattingPage />,
			},
			{
				path: 'item_detail/:idx',
				element: <ItemDetailPage />,
			},
			{
				path: 'landing',
				element: <LandingPage />,
			},
			{
				path: 'main',
				element: <MainPage />,
			},
			{
				path: 'market_price/:word',
				element: <MarketPricePage />,
			},
			{
				path: 'market_price',
				element: <MarketPricePage />,
			},
			{
				path: '/mypage',
				element: <MyPage />,
				children: [
					{
						path: '/mypage/item',
						element: <MyItemPage />,
					},
					{
						path: '/mypage/account_book',
						element: <AccountBookPage />,
					},
					{
						path: '/mypage/interest',
						element: <MyInterestPage />,
					},
					{
						path: '/mypage/user_edit',
						element: <MyUserEdit />,
					},
					{
						path: '/mypage/user_password_edit',
						element: <MyPasswordEdit />,
					},
					{
						path: '/mypage/review',
						element: <MyReview />,
					},
				],
			},
			{
				path: 'profile',
				element: <YourProfile />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
			},
			{
				path: 'register/:idx',
				element: <RegisterPage />,
			},
			{
				path: 'search_list/:word',
				element: <SearchListPage />,
			},
			{
				path: 'search_list/:word/:category',
				element: <WholeListPage />,
			},
			{
				path: 'review/:idx',
				element: <ReviewPage />,
			},
			{
				path: 'review/edit/:idx',
				element: <ReviewEditPage />,
			},
			{
				path: 'review/detail/:idx',
				element: <ReviewDetail />,
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);

export default router;
