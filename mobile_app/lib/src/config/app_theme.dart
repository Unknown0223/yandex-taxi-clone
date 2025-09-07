import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData get light =&gt; ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        useMaterial3: true,
        brightness: Brightness.light,
      );

  static ThemeData get dark =&gt; ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo, brightness: Brightness.dark),
        useMaterial3: true,
        brightness: Brightness.dark,
      );
}