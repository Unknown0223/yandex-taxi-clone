import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'config/app_theme.dart';
import 'features/auth/splash_page.dart';
import 'features/auth/login_page.dart';
import 'features/auth/register_page.dart';
import 'features/profile/profile_page.dart';
import 'features/role/role_select_page.dart';
import 'features/trips/passenger/create_order_page.dart';
import 'features/trips/trips_list_page.dart';
import 'features/trips/trip_detail_page.dart';
import 'features/trips/driver/driver_orders_page.dart';
import 'features/payments/payment_method_page.dart';
import 'features/payments/payment_history_page.dart';
import 'features/chat/chat_page.dart';
import 'features/notifications/notifications_page.dart';

final _router = GoRouter(
  initialLocation: '/splash',
  routes: [
    GoRoute(path: '/splash', builder: (_, __) =&gt; const SplashPage()),
    GoRoute(path: '/login', builder: (_, __) =&gt; const LoginPage()),
    GoRoute(path: '/register', builder: (_, __) =&gt; const RegisterPage()),
    GoRoute(path: '/role', builder: (_, __) =&gt; const RoleSelectPage()),
    GoRoute(path: '/profile', builder: (_, __) =&gt; const ProfilePage()),
    GoRoute(path: '/order', builder: (_, __) =&gt; const CreateOrderPage()),
    GoRoute(path: '/trips', builder: (_, __) =&gt; const TripsListPage()),
    GoRoute(path: '/trip/:id', builder: (c, s) =&gt; TripDetailPage(id: s.pathParameters['id']!)),
    GoRoute(path: '/driver/orders', builder: (_, __) =&gt; const DriverOrdersPage()),
    GoRoute(path: '/payments/method', builder: (_, __) =&gt; const PaymentMethodPage()),
    GoRoute(path: '/payments/history', builder: (_, __) =&gt; const PaymentHistoryPage()),
    GoRoute(path: '/chat/:tripId', builder: (c, s) =&gt; ChatPage(tripId: s.pathParameters['tripId']!)),
    GoRoute(path: '/notifications', builder: (_, __) =&gt; const NotificationsPage()),
  ],
);

class MobileApp extends ConsumerWidget {
  const MobileApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return MaterialApp.router(
      title: 'Ride App',
      theme: AppTheme.light,
      darkTheme: AppTheme.dark,
      themeMode: ThemeMode.system,
      routerConfig: _router,
      debugShowCheckedModeBanner: false,
    );
  }
}