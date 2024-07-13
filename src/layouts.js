const layouts = {
    club_summary: {
        xl: [
            {i: 'team_stats', x: 0, y: 0, w: 1, h: 1},
            {i: 'attendance', x: 1, y: 0, w: 1, h: 1},
            {i: 'training_pace', x: 0, y: 1, w: 2, h: 1},
            {i: 'live_report', x: 2, y: 2, w: 1, h: 2},
            {i: 'team_full_info', x: 0, y: 2, w: 2, h: 2},
            {i: 'team_results', x: 2, y: 0, w: 2, h: 2},
            {i: 'league_standings', x: 3, y: 2, w: 1, h: 2},
        ],
        lg: [
            {i: 'team_stats', x: 0, y: 0, w: 1, h: 1},
            {i: 'attendance', x: 1, y: 0, w: 1, h: 1},
            {i: 'training_pace', x: 0, y: 1, w: 2, h: 1},
            {i: 'live_report', x: 2, y: 0, w: 1, h: 2},
            {i: 'team_full_info', x: 0, y: 2, w: 2, h: 2},
            {i: 'team_results', x: 0, y: 4, w: 2, h: 2},
            {i: 'league_standings', x: 2, y: 2, w: 1, h: 2},
        ],
        md: [
            {i: 'team_stats', x: 0, y: 0, w: 1, h: 1},
            {i: 'attendance', x: 1, y: 0, w: 1, h: 1},
            {i: 'training_pace', x: 0, y: 1, w: 2, h: 1},
            {i: 'live_report', x: 1, y: 6, w: 1, h: 2},
            {i: 'team_full_info', x: 0, y: 4, w: 2, h: 2},
            {i: 'team_results', x: 0, y: 2, w: 2, h: 2},
            {i: 'league_standings', x: 0, y: 6, w: 1, h: 2},
        ]
    },
    game_summary: {
        xl: [
            {i: 'highlight', x: 0, y: 0, w: 1, h: 1},
            {i: 'compare', x: 0, y: 1, w: 1, h: 1},
            {i: 'passes_polar_chart', x: 0, y: 2, w: 1, h: 2},
            {i: 'clubs_by_country', x: 3, y: 0, w: 1, h: 4},
            {i: 'match_events', x: 1, y: 0, w: 2, h: 1},
            {i: 'match_result', x: 1, y: 1, w: 2, h: 3},
        ],
        lg: [
            {i: 'highlight', x: 0, y: 4, w: 1, h: 1},
            {i: 'compare', x: 0, y: 5, w: 1, h: 1},
            {i: 'passes_polar_chart', x: 1, y: 4, w: 1, h: 2},
            {i: 'clubs_by_country', x: 0, y: 0, w: 1, h: 4},
            {i: 'match_events', x: 1, y: 0, w: 2, h: 1},
            {i: 'match_result', x: 1, y: 1, w: 2, h: 3},
        ],
        md: [
            {i: 'highlight', x: 0, y: 1, w: 1, h: 1},
            {i: 'compare', x: 0, y: 2, w: 1, h: 1},
            {i: 'passes_polar_chart', x: 0, y: 3, w: 1, h: 2},
            {i: 'clubs_by_country', x: 1, y: 1, w: 1, h: 4},
            {i: 'match_events', x: 0, y: 0, w: 2, h: 1},
            {i: 'match_result', x: 0, y: 5, w: 2, h: 3},
        ]
    },
    championships: {
        xl: [
            {i: 'segment_chart', x: 3, y: 2, w: 1, h: 2},
            {i: 'live_matches', x: 3, y: 0, w: 1, h: 2},
            {i: 'team_stats', x: 1, y: 3, w: 2, h: 1},
            {i: 'month_matches', x: 1, y: 0, w: 2, h: 3},
            {i: 'match_result', x: 0, y: 0, w: 1, h: 4},
        ],
        lg: [
            {i: 'segment_chart', x: 0, y: 4, w: 1, h: 2},
            {i: 'live_matches', x: 1, y: 4, w: 2, h: 2},
            {i: 'team_stats', x: 1, y: 3, w: 2, h: 1},
            {i: 'month_matches', x: 1, y: 0, w: 2, h: 3},
            {i: 'match_result', x: 0, y: 0, w: 1, h: 4},
        ],
        md: [
            {i: 'segment_chart', x: 1, y: 5, w: 1, h: 2},
            {i: 'live_matches', x: 1, y: 3, w: 1, h: 2},
            {i: 'team_stats', x: 0, y: 7, w: 2, h: 1},
            {i: 'month_matches', x: 0, y: 0, w: 2, h: 3},
            {i: 'match_result', x: 0, y: 3, w: 1, h: 4},
        ]
    },
    league_overview: {
        xl: [
            {i: 'league_rating', x: 0, y: 0, w: 1, h: 2},
            {i: 'matches_overview', x: 1, y: 2, w: 2, h: 3},
            {i: 'calendar', x: 3, y: 2, w: 1, h: 2},
            {i: 'team_pulse', x: 3, y: 1, w: 1, h: 1},
            {i: 'team_stats', x: 3, y: 0, w: 1, h: 1},
            {i: 'standings', x: 0, y: 3, w: 1, h: 1},
            {i: 'ball_possession', x: 1, y: 3, w: 2, h: 1},
            {i: 'dots_chart', x: 0, y: 2, w: 1, h: 1},
        ],
        lg: [
            {i: 'league_rating', x: 0, y: 0, w: 1, h: 2},
            {i: 'matches_overview', x: 1, y: 0, w: 2, h: 3},
            {i: 'calendar', x: 1, y: 3, w: 1, h: 2},
            {i: 'team_pulse', x: 0, y: 2, w: 1, h: 1},
            {i: 'team_stats', x: 0, y: 3, w: 1, h: 1},
            {i: 'standings', x: 0, y: 4, w: 1, h: 1},
            {i: 'ball_possession', x: 0, y: 5, w: 3, h: 1},
            {i: 'dots_chart', x: 2, y: 3, w: 1, h: 2},
        ],
        md: [
            {i: 'league_rating', x: 0, y: 0, w: 1, h: 2},
            {i: 'matches_overview', x: 0, y: 2, w: 2, h: 3},
            {i: 'calendar', x: 1, y: 0, w: 1, h: 2},
            {i: 'team_pulse', x: 0, y: 5, w: 1, h: 1},
            {i: 'team_stats', x: 1, y: 6, w: 1, h: 1},
            {i: 'standings', x: 1, y: 5, w: 1, h: 1},
            {i: 'ball_possession', x: 0, y: 7, w: 2, h: 1},
            {i: 'dots_chart', x: 0, y: 6, w: 1, h: 1},
        ]
    },
    fans: {
        xl: [
            {i: 'club_fans', x: 0, y: 0, w: 1, h: 1},
            {i: 'club_fans_map', x: 0, y: 1, w: 1, h: 1},
            {i: 'messages', x: 1, y: 0, w: 1, h: 2},
            {i: 'calendar', x: 2, y: 0, w: 1, h: 2},
            {i: 'sign_up', x: 3, y: 0, w: 1, h: 2},
            {i: 'tasks', x: 0, y: 2, w: 1, h: 2},
            {i: 'pr', x: 1, y: 2, w: 1, h: 2},
            {i: 'testimonials', x: 2, y: 2, w: 1, h: 2},
            {i: 'local_fans', x: 3, y: 2, w: 1, h: 2},
        ],
        lg: [
            {i: 'club_fans', x: 0, y: 0, w: 1, h: 1},
            {i: 'club_fans_map', x: 0, y: 1, w: 1, h: 1},
            {i: 'messages', x: 2, y: 6, w: 1, h: 2},
            {i: 'calendar', x: 1, y: 0, w: 1, h: 2},
            {i: 'sign_up', x: 2, y: 0, w: 1, h: 2},
            {i: 'tasks', x: 0, y: 2, w: 1, h: 2},
            {i: 'pr', x: 0, y: 6, w: 2, h: 2},
            {i: 'testimonials', x: 2, y: 2, w: 1, h: 2},
            {i: 'local_fans', x: 1, y: 2, w: 1, h: 2},
        ],
        md: [
            {i: 'club_fans', x: 0, y: 0, w: 1, h: 1},
            {i: 'club_fans_map', x: 0, y: 1, w: 1, h: 1},
            {i: 'messages', x: 0, y: 6, w: 1, h: 2},
            {i: 'calendar', x: 1, y: 6, w: 1, h: 2},
            {i: 'sign_up', x: 1, y: 0, w: 1, h: 2},
            {i: 'tasks', x: 1, y: 4, w: 1, h: 2},
            {i: 'pr', x: 0, y: 4, w: 1, h: 2},
            {i: 'testimonials', x: 0, y: 6, w: 1, h: 2},
            {i: 'local_fans', x: 1, y: 6, w: 1, h: 2},
        ]
    },
    statistics: {
        xl: [
            {i: 'passes_pie_chart', x: 0, y: 2, w: 1, h: 2},
            {i: 'dots_chart', x: 2, y: 2, w: 1, h: 1},
            {i: 'multi_progress', x: 0, y: 1, w: 1, h: 1},
            {i: 'vertical_progress', x: 1, y: 2, w: 1, h: 1},
            {i: 'speed', x: 3, y: 0, w: 1, h: 2},
            {i: 'championship_position', x: 1, y: 3, w: 2, h: 1},
            {i: 'team_compare', x: 1, y: 0, w: 2, h: 2},
            {i: 'live_matches', x: 3, y: 2, w: 1, h: 2},
            {i: 'player_cards', x: 0, y: 0, w: 1, h: 1}
        ],
        lg: [
            {i: 'passes_pie_chart', x: 0, y: 1, w: 1, h: 2},
            {i: 'dots_chart', x: 2, y: 0, w: 1, h: 1},
            {i: 'multi_progress', x: 1, y: 1, w: 1, h: 1},
            {i: 'vertical_progress', x: 1, y: 2, w: 1, h: 1},
            {i: 'speed', x: 2, y: 1, w: 1, h: 2},
            {i: 'championship_position', x: 1, y: 0, w: 1, h: 1},
            {i: 'team_compare', x: 0, y: 3, w: 2, h: 2},
            {i: 'live_matches', x: 2, y: 3, w: 1, h: 2},
            {i: 'player_cards', x: 0, y: 0, w: 1, h: 1}
        ],
        md: [
            {i: 'passes_pie_chart', x: 0, y: 1, w: 1, h: 2},
            {i: 'dots_chart', x: 1, y: 1, w: 1, h: 1},
            {i: 'multi_progress', x: 1, y: 0, w: 1, h: 1},
            {i: 'vertical_progress', x: 1, y: 2, w: 1, h: 1},
            {i: 'speed', x: 0, y: 6, w: 1, h: 2},
            {i: 'championship_position', x: 0, y: 3, w: 2, h: 1},
            {i: 'team_compare', x: 0, y: 4, w: 2, h: 2},
            {i: 'live_matches', x: 1, y: 6, w: 1, h: 2},
            {i: 'player_cards', x: 0, y: 0, w: 1, h: 1}
        ]
    },
    match_summary: {
        xl: [
            {i: 'user', x: 1, y: 3, w: 1, h: 1},
            {i: 'group1', x: 1, y: 0, w: 1, h: 1},
            {i: 'group2', x: 2, y: 0, w: 1, h: 1},
            {i: 'team_stats_progress', x: 3, y: 2, w: 1, h: 2},
            {i: 'passes_polar_chart', x: 2, y: 1, w: 1, h: 2},
            {i: 'ball_possession', x: 2, y: 3, w: 1, h: 1},
            {i: 'match_result', x: 0, y: 0, w: 1, h: 4},
            {i: 'teams_lineups', x: 3, y: 0, w: 1, h: 2},
            {i: 'match_live_events', x: 1, y: 1, w: 1, h: 2},
        ],
        lg: [
            {i: 'user', x: 1, y: 4, w: 1, h: 1},
            {i: 'team_stats_progress', x: 2, y: 2, w: 1, h: 2},
            {i: 'passes_polar_chart', x: 1, y: 2, w: 1, h: 2},
            {i: 'ball_possession', x: 2, y: 4, w: 1, h: 1},
            {i: 'match_result', x: 0, y: 0, w: 1, h: 4},
            {i: 'teams_lineups', x: 2, y: 0, w: 1, h: 2},
            {i: 'match_live_events', x: 1, y: 0, w: 1, h: 2},
        ],
        md: [
            {i: 'user', x: 1, y: 6, w: 1, h: 1},
            {i: 'group1', x: 1, y: 0, w: 1, h: 1},
            {i: 'group2', x: 2, y: 0, w: 1, h: 1},
            {i: 'team_stats_progress', x: 3, y: 2, w: 1, h: 2},
            {i: 'passes_polar_chart', x: 0, y: 6, w: 1, h: 2},
            {i: 'ball_possession', x: 1, y: 7, w: 1, h: 1},
            {i: 'match_result', x: 0, y: 0, w: 1, h: 4},
            {i: 'teams_lineups', x: 1, y: 2, w: 1, h: 2},
            {i: 'match_live_events', x: 0, y: 6, w: 1, h: 2},
        ]
    },
    match_overview: {
        xl: [
            {i: 'support', x: 3, y: 3, w: 1, h: 1},
            {i: 'hot_field', x: 3, y: 1, w: 1, h: 1},
            {i: 'teams_lineups', x: 2, y: 2, w: 1, h: 2},
            {i: 'active_actions', x: 1, y: 0, w: 2, h: 2},
            {i: 'passes_polar_chart', x: 0, y: 2, w: 1, h: 2},
            {i: 'player_full_info', x: 0, y: 0, w: 1, h: 2},
            {i: 'merch', x: 3, y: 1, w: 1, h: 1},
            {i: 'match_live_events', x: 1, y: 2, w: 1, h: 2},
            {i: 'active_match', x: 3, y: 0, w: 1, h: 1},
        ],
        lg: [
            {i: 'support', x: 1, y: 4, w: 1, h: 1},
            {i: 'hot_field', x: 2, y: 1, w: 1, h: 1},
            {i: 'teams_lineups', x: 2, y: 2, w: 1, h: 2},
            {i: 'active_actions', x: 1, y: 0, w: 1, h: 2},
            {i: 'passes_polar_chart', x: 0, y: 2, w: 1, h: 2},
            {i: 'player_full_info', x: 0, y: 0, w: 1, h: 2},
            {i: 'merch', x: 0, y: 4, w: 1, h: 1},
            {i: 'match_live_events', x: 1, y: 2, w: 1, h: 2},
            {i: 'active_match', x: 2, y: 0, w: 1, h: 1},
        ],
        md: [
            {i: 'support', x: 2, y: 6, w: 1, h: 1},
            {i: 'hot_field', x: 1, y: 1, w: 1, h: 1},
            {i: 'teams_lineups', x: 1, y: 2, w: 1, h: 2},
            {i: 'active_actions', x: 0, y: 4, w: 2, h: 2},
            {i: 'passes_polar_chart', x: 0, y: 2, w: 1, h: 2},
            {i: 'player_full_info', x: 0, y: 0, w: 1, h: 2},
            {i: 'merch', x: 1, y: 6, w: 1, h: 1},
            {i: 'match_live_events', x: 0, y: 6, w: 1, h: 2},
            {i: 'active_match', x: 1, y: 0, w: 1, h: 1},
        ]
    },
    player_profile: {
        xl: [
            {i: 'profile_card', x: 0, y: 0, w: 1, h: 1},
            {i: 'training_pace', x: 1, y: 0, w: 2, h: 1},
            {i: 'calendar', x: 3, y: 0, w: 1, h: 2},
            {i: 'shots', x: 0, y: 1, w: 1, h: 2},
            {i: 'planner', x: 1, y: 1, w: 2, h: 2},
            {i: 'messages', x: 3, y: 2, w: 1, h: 2},
            {i: 'field', x: 0, y: 3, w: 1, h: 1},
            {i: 'champions', x: 1, y: 3, w: 2, h: 1},
        ],
        lg: [
            {i: 'profile_card', x: 0, y: 0, w: 1, h: 1},
            {i: 'training_pace', x: 1, y: 0, w: 2, h: 1},
            {i: 'calendar', x: 0, y: 1, w: 1, h: 2},
            {i: 'shots', x: 1, y: 1, w: 1, h: 2},
            {i: 'planner', x: 1, y: 3, w: 2, h: 2},
            {i: 'messages', x: 2, y: 1, w: 1, h: 2},
            {i: 'field', x: 0, y: 3, w: 1, h: 1},
            {i: 'champions', x: 0, y: 4, w: 1, h: 1},
        ],
        md: [
            {i: 'profile_card', x: 0, y: 0, w: 1, h: 1},
            {i: 'training_pace', x: 0, y: 2, w: 2, h: 1},
            {i: 'calendar', x: 0, y: 3, w: 1, h: 2},
            {i: 'shots', x: 1, y: 0, w: 1, h: 2},
            {i: 'planner', x: 0, y: 6, w: 2, h: 2},
            {i: 'messages', x: 1, y: 3, w: 1, h: 2},
            {i: 'field', x: 0, y: 1, w: 1, h: 1},
            {i: 'champions', x: 0, y: 5, w: 2, h: 1},
        ]
    },
    tickets: {
        xl: [
            {i: 'ticket', x: 0, y: 0, w: 1, h: 3},
            {i: 'user', x: 0, y: 3, w: 1, h: 1},
            {i: 'calendar', x: 1, y: 0, w: 1, h: 2},
            {i: 'messages', x: 2, y: 0, w: 1, h: 2},
            {i: 'promo', x: 3, y: 0, w: 1, h: 2},
            {i: 'live', x: 1, y: 2, w: 2, h: 2},
            {i: 'teams', x: 3, y: 2, w: 1, h: 1},
            {i: 'merch', x: 3, y: 3, w: 1, h: 1},
        ],
        lg: [
            {i: 'ticket', x: 0, y: 0, w: 1, h: 3},
            {i: 'user', x: 0, y: 3, w: 1, h: 1},
            {i: 'calendar', x: 1, y: 0, w: 1, h: 2},
            {i: 'messages', x: 1, y: 2, w: 1, h: 2},
            {i: 'promo', x: 2, y: 0, w: 1, h: 2},
            {i: 'live', x: 0, y: 5, w: 2, h: 2},
            {i: 'teams', x: 2, y: 3, w: 1, h: 1},
            {i: 'merch', x: 2, y: 4, w: 1, h: 1},
        ],
        md: [
            {i: 'ticket', x: 0, y: 0, w: 1, h: 3},
            {i: 'user', x: 0, y: 3, w: 1, h: 1},
            {i: 'calendar', x: 0, y: 4, w: 1, h: 2},
            {i: 'messages', x: 1, y: 4, w: 1, h: 2},
            {i: 'promo', x: 1, y: 0, w: 1, h: 2},
            {i: 'live', x: 0, y: 5, w: 2, h: 2},
            {i: 'teams', x: 1, y: 3, w: 1, h: 1},
            {i: 'merch', x: 1, y: 2, w: 1, h: 1},
        ]
    },
    football_store: {
        xl: [
            {i: 'categories', x: 0, y: 0, w: 1, h: 1},
            {i: 'qty', x: 0, y: 1, w: 1, h: 1},
            {i: 'sizes', x: 0, y: 2, w: 1, h: 1},
            {i: 'colors', x: 0, y: 3, w: 1, h: 1},
            {i: 'products_group', x: 1, y: 0, w: 1, h: 4},
            {i: 'products_list', x: 2, y: 0, w: 1, h: 4},
            {i: 'product_vertical', x: 3, y: 0, w: 1, h: 4},
        ],
        lg: [
            {i: 'categories', x: 0, y: 0, w: 1, h: 1},
            {i: 'qty', x: 0, y: 1, w: 1, h: 1},
            {i: 'sizes', x: 0, y: 2, w: 1, h: 1},
            {i: 'colors', x: 0, y: 3, w: 1, h: 1},
            {i: 'products_group', x: 1, y: 0, w: 1, h: 4},
            {i: 'products_list', x: 0, y: 4, w: 3, h: 1},
            {i: 'product_vertical', x: 2, y: 0, w: 1, h: 4},
        ],
        md: [
            {i: 'categories', x: 0, y: 0, w: 1, h: 1},
            {i: 'qty', x: 0, y: 1, w: 1, h: 1},
            {i: 'sizes', x: 0, y: 2, w: 1, h: 1},
            {i: 'colors', x: 0, y: 3, w: 1, h: 1},
            {i: 'products_group', x: 1, y: 0, w: 1, h: 4},
            {i: 'products_list', x: 0, y: 4, w: 1, h: 4},
            {i: 'product_vertical', x: 1, y: 4, w: 1, h: 4},
        ]
    },
    brand_store: {
        xl: [
            {i: 'support', x: 0, y: 0, w: 1, h: 1},
            {i: 'color_bars', x: 0, y: 3, w: 1, h: 1},
            {i: 'brand_products', x: 1, y: 2, w: 3, h: 2},
            {i: 'colors', x: 0, y: 3, w: 1, h: 1},
            {i: 'product_display', x: 1, y: 0, w: 2, h: 2},
            {i: 'brand_menu', x: 0, y: 1, w: 1, h: 2},
            {i: 'shopping_cart', x: 3, y: 0, w: 1, h: 2},
        ],
        lg: [
            {i: 'support', x: 1, y: 3, w: 1, h: 1},
            {i: 'color_bars', x: 1, y: 2, w: 1, h: 1},
            {i: 'brand_products', x: 2, y: 2, w: 1, h: 2},
            {i: 'colors', x: 1, y: 2, w: 1, h: 1},
            {i: 'product_display', x: 1, y: 0, w: 2, h: 2},
            {i: 'brand_menu', x: 0, y: 0, w: 1, h: 2},
            {i: 'shopping_cart', x: 0, y: 2, w: 1, h: 2},
        ],
        md: [
            {i: 'support', x: 1, y: 3, w: 1, h: 1},
            {i: 'color_bars', x: 0, y: 3, w: 1, h: 1},
            {i: 'brand_products', x: 0, y: 5, w: 2, h: 2},
            {i: 'colors', x: 0, y: 3, w: 1, h: 1},
            {i: 'product_display', x: 0, y: 1, w: 2, h: 2},
            {i: 'brand_menu', x: 0, y: 0, w: 1, h: 2},
            {i: 'shopping_cart', x: 1, y: 0, w: 1, h: 2},
        ]
    },
    product: {
        xl: [
            {i: 'product_display', x: 0, y: 0, w: 2, h: 3},
            {i: 'product_details', x: 2, y: 0, w: 1, h: 1},
            {i: 'product_additional', x: 2, y: 1, w: 1, h: 1},
            {i: 'support', x: 2, y: 2, w: 1, h: 1},
            {i: 'reviews', x: 3, y: 0, w: 1, h: 3},
            {i: 'products_list', x: 0, y: 3, w: 4, h: 1},
        ],
        lg: [
            {i: 'product_display', x: 0, y: 0, w: 2, h: 3},
            {i: 'product_details', x: 0, y: 3, w: 1, h: 1},
            {i: 'product_additional', x: 1, y: 3, w: 1, h: 1},
            {i: 'support', x: 2, y: 3, w: 1, h: 1},
            {i: 'reviews', x: 2, y: 0, w: 1, h: 3},
            {i: 'products_list', x: 0, y: 4, w: 4, h: 1},
        ],
        md: [
            {i: 'product_display', x: 0, y: 0, w: 2, h: 3},
            {i: 'product_details', x: 0, y: 3, w: 1, h: 1},
            {i: 'product_additional', x: 0, y: 4, w: 1, h: 1},
            {i: 'support', x: 0, y: 5, w: 1, h: 1},
            {i: 'reviews', x: 1, y: 3, w: 1, h: 3},
            {i: 'products_list', x: 0, y: 6, w: 2, h: 1},
        ]
    },
    settings: {
        xl: [
            {i: 'avatar', x: 0, y: 0, w: 1, h: 1},
            {i: 'info', x: 0, y: 1, w: 1, h: 1},
            {i: 'description', x: 3, y: 0, w: 1, h: 2},
            {i: 'settings', x: 1, y: 0, w: 2, h: 2},
            {i: 'payments', x: 1, y: 2, w: 1, h: 2},
            {i: 'privacy', x: 3, y: 2, w: 1, h: 2},
            {i: 'notifications_settings', x: 0, y: 2, w: 1, h: 1},
            {i: 'notifications_schedule', x: 0, y: 3, w: 1, h: 1},
            {i: 'password', x: 2, y: 2, w: 1, h: 2}
        ],
        lg: [
            {i: 'avatar', x: 0, y: 0, w: 1, h: 1},
            {i: 'info', x: 0, y: 1, w: 1, h: 1},
            {i: 'description', x: 0, y: 2, w: 1, h: 2},
            {i: 'settings', x: 1, y: 0, w: 2, h: 2},
            {i: 'payments', x: 2, y: 2, w: 1, h: 2},
            {i: 'privacy', x: 1, y: 2, w: 1, h: 2},
            {i: 'notifications_settings', x: 0, y: 4, w: 1, h: 1},
            {i: 'notifications_schedule', x: 0, y: 5, w: 1, h: 1},
            {i: 'password', x: 1, y: 4, w: 1, h: 2}
        ],
        md: [
            {i: 'avatar', x: 0, y: 0, w: 1, h: 1},
            {i: 'info', x: 0, y: 1, w: 1, h: 1},
            {i: 'description', x: 1, y: 0, w: 1, h: 2},
            {i: 'settings', x: 0, y: 2, w: 2, h: 2},
            {i: 'payments', x: 0, y: 4, w: 1, h: 2},
            {i: 'privacy', x: 1, y: 4, w: 1, h: 2},
            {i: 'notifications_settings', x: 0, y: 6, w: 1, h: 1},
            {i: 'notifications_schedule', x: 0, y: 7, w: 1, h: 1},
            {i: 'password', x: 1, y: 6, w: 1, h: 2}
        ]
    },
    // CUSTOMS
    homescreen: {
        xl: [
            { i: 'slideshow', x: 0, y: 0, w: 4, h: 4 },  // Full width and height
        ],
        lg: [
            { i: 'slideshow', x: 0, y: 0, w: 3, h: 4 },  // Full width and height
        ],
        md: [
            { i: 'slideshow', x: 0, y: 0, w: 2, h: 4 },  // Full width and height
        ],
        sm: [
            { i: 'slideshow', x: 0, y: 0, w: 1, h: 4 },  // Full width and height
        ]
    },
    registerscreen: {
        xl: [
            { i: 'registration', x: 0, y: 0, w: 4, h: 5 },
        ],
        lg: [
            { i: 'registration', x: 0, y: 0, w: 3, h: 4 },
        ],
        md: [
            { i: 'registration', x: 0, y: 0, w: 2, h: 4 },
        ],
        sm: [
            { i: 'registration', x: 0, y: 0, w: 1, h: 4 },
        ]
    },
    verificationscreen: {
        xl: [
            { i: 'verification', x: 0, y: 0, w: 4, h: 5 },
        ],
        lg: [
            { i: 'verification', x: 0, y: 0, w: 3, h: 4 },
        ],
        md: [
            { i: 'verification', x: 0, y: 0, w: 2, h: 4 },
        ],
        sm: [
            { i: 'verification', x: 0, y: 0, w: 1, h: 4 },
        ]

    }

}

export default layouts