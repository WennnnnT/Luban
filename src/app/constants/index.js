// Metric and Imperial units
export const IMPERIAL_UNITS = 'in';
export const METRIC_UNITS = 'mm';

export const EPSILON = 1e-6;

// Controller
export const MARLIN = 'Marlin';

// Workflow State
export const WORKFLOW_STATE_RUNNING = 'running';
export const WORKFLOW_STATE_PAUSED = 'paused';
export const WORKFLOW_STATE_IDLE = 'idle';

// Workflow status
export const WORKFLOW_STATUS_UNKNOWN = 'unknown';
export const WORKFLOW_STATUS_IDLE = 'idle';
export const WORKFLOW_STATUS_RUNNING = 'running';
export const WORKFLOW_STATUS_PAUSED = 'paused';

// Head Type
export const HEAD_TYPE_UNKNOWN = 'UNKNOWN';
export const HEAD_TYPE_3DP = '3DP';
export const HEAD_TYPE_LASER = 'LASER';
export const HEAD_TYPE_CNC = 'CNC';
// Workflow State


// Connection Status
export const CONNECTION_STATUS_IDLE = 'idle';
export const CONNECTION_STATUS_CONNECTING = 'connecting';
export const CONNECTION_STATUS_CONNECTED = 'connected';

// G-code Macro
export const MODAL_NONE = 'none';
export const MODAL_ADD_MACRO = 'add';
export const MODAL_EDIT_MACRO = 'edit';
export const MODAL_RUN_MACRO = 'run';

// Purifier
export const SPEED_HIGH = 3;
export const SPEED_MEDIUM = 2;
export const SPEED_LOW = 1;

// Stages for Laser and CNC Carving
export const STAGE_IDLE = 0;
export const STAGE_IMAGE_LOADED = 1;
export const STAGE_PREVIEWING = 2;
export const STAGE_PREVIEWED = 3;
export const STAGE_GENERATED = 4;

export const PAGE_EDITOR = 'editor';
export const PAGE_PROCESS = 'process';

// Stages for 3d print
export const STAGES_3DP = {
    noModel: 10,
    modelLoaded: 11,
    gcodeRendered: 12
};
// !important: keys in PRINTING_QUALITY_CONFIG_KEYS, PRINTING_QUALITY_CONFIG_GROUP should change togethor
export const PRINTING_MATERIAL_CONFIG_KEYS = [
    'material_diameter',
    'material_flow',
    'material_print_temperature',
    'material_print_temperature_layer_0',
    'cool_fan_speed',
    'machine_heated_bed',
    'material_bed_temperature',
    'material_bed_temperature_layer_0',
    'material_flow_layer_0'
];
export const PRINTING_QUALITY_CONFIG_KEYS = [
    'layer_height',
    'layer_height_0',
    'initial_layer_line_width_factor',
    'wall_thickness',
    'top_thickness',
    'bottom_thickness',
    'outer_inset_first',
    'infill_sparse_density',
    'infill_pattern',
    // 'speed_print',
    'speed_print_layer_0',
    'speed_infill',
    'speed_wall_0',
    'speed_wall_x',
    'speed_topbottom',
    'speed_travel',
    'speed_travel_layer_0',
    'retraction_enable',
    'retract_at_layer_change',
    'retraction_amount',
    'retraction_speed',
    'retraction_hop_enabled',
    'retraction_hop',
    // 'Surface'
    'magic_spiralize',
    'magic_mesh_surface_mode',
    // 'HeatedBedAdhesionType'
    'adhesion_type',
    'skirt_line_count',
    'brim_line_count',
    'raft_margin',
    // 'Support'
    'support_enable',
    'support_type',
    'support_angle',
    'support_pattern',
    'support_infill_rate',
    'support_z_distance',
    'machine_extruder_count',
    'extruders_enabled_count',
    'wall_line_width_0',
    'wall_line_width_x',
    'skin_line_width',
    'infill_line_width',
    'skirt_brim_line_width',
    'support_line_width',
    'support_roof_line_width',
    'support_bottom_line_width',
    'prime_tower_line_width',
    'wall_0_extruder_nr',
    'wall_x_extruder_nr',
    'wall_line_count',
    'wall_0_wipe_dist',
    'roofing_extruder_nr',
    'roofing_layer_count',
    'top_bottom_extruder_nr',
    'top_layers',
    'bottom_layers',
    'initial_bottom_layers',
    'top_bottom_pattern',
    'top_bottom_pattern_0',
    'connect_skin_polygons',
    'skin_angles',
    'wall_0_inset',
    'alternate_extra_perimeter',
    'travel_compensate_overlapping_walls_0_enabled',
    'travel_compensate_overlapping_walls_x_enabled',
    'wall_min_flow',
    'wall_min_flow_retract',
    'fill_perimeter_gaps',
    'filter_out_tiny_gaps',
    'fill_outline_gaps',
    'xy_offset',
    'xy_offset_layer_0',
    'hole_xy_offset',
    'z_seam_type',
    'z_seam_x',
    'z_seam_y',
    'z_seam_corner',
    'skin_no_small_gaps_heuristic',
    'skin_outline_count',
    'ironing_enabled',
    'ironing_only_highest_layer',
    'ironing_pattern',
    'ironing_line_spacing',
    'ironing_flow',
    'ironing_inset',
    'speed_ironing',
    'acceleration_ironing',
    'jerk_ironing',
    'skin_overlap_mm',
    'infill_extruder_nr',
    'infill_line_distance',
    'zig_zaggify_infill',
    'connect_infill_polygons',
    'infill_angles',
    'infill_offset_x',
    'infill_offset_y',
    'infill_randomize_start_location',
    'infill_multiplier',
    'infill_wall_line_count',
    'sub_div_rad_add',
    'infill_overlap_mm',
    'infill_wipe_dist',
    'infill_sparse_thickness',
    'gradual_infill_steps',
    'gradual_infill_step_height',
    'infill_before_walls',
    'min_infill_area',
    'infill_support_enabled',
    'infill_support_angle',
    'top_skin_preshrink',
    'bottom_skin_preshrink',
    'top_skin_expand_distance',
    'bottom_skin_expand_distance',
    'min_skin_width_for_expansion',
    'skin_edge_support_layers',
    'default_material_print_temperature',
    'build_volume_temperature',
    'material_initial_print_temperature',
    'material_extrusion_cool_down_speed',
    'material_adhesion_tendency',
    'material_surface_energy',
    'material_shrinkage_percentage',
    'material_crystallinity',
    'material_anti_ooze_retracted_position',
    'material_anti_ooze_retraction_speed',
    'material_break_preparation_retracted_position',
    'material_break_preparation_speed',
    'material_break_preparation_temperature',
    'material_break_retracted_position',
    'material_break_speed',
    'material_break_temperature',
    'material_flush_purge_speed',
    'material_flush_purge_length',
    'material_end_of_filament_purge_speed',
    'material_end_of_filament_purge_length',
    'material_maximum_park_duration',
    'material_no_load_move_factor',
    'wall_0_material_flow',
    'wall_x_material_flow',
    'skin_material_flow',
    'roofing_material_flow',
    'infill_material_flow',
    'skirt_brim_material_flow',
    'support_material_flow',
    'support_roof_material_flow',
    'support_bottom_material_flow',
    'prime_tower_flow',
    'material_standby_temperature',
    'speed_roofing',
    'speed_support_infill',
    'speed_support_roof',
    'speed_support_bottom',
    'speed_prime_tower',
    'skirt_brim_speed',
    'speed_z_hop',
    'speed_equalize_flow_enabled',
    'speed_equalize_flow_max',
    'acceleration_enabled',
    'acceleration_infill',
    'acceleration_wall_0',
    'acceleration_wall_x',
    'acceleration_roofing',
    'acceleration_topbottom',
    'acceleration_support_infill',
    'acceleration_support_roof',
    'acceleration_support_bottom',
    'acceleration_prime_tower',
    'acceleration_travel',
    'acceleration_print_layer_0',
    'acceleration_travel_layer_0',
    'acceleration_skirt_brim',
    'jerk_enabled',
    'jerk_infill',
    'jerk_wall_0',
    'jerk_wall_x',
    'jerk_roofing',
    'jerk_topbottom',
    'jerk_support_infill',
    'jerk_support_roof',
    'jerk_support_bottom',
    'jerk_prime_tower',
    'jerk_travel',
    'jerk_print_layer_0',
    'jerk_travel_layer_0',
    'jerk_skirt_brim',
    'retraction_retract_speed',
    'retraction_prime_speed',
    'retraction_extra_prime_amount',
    'retraction_min_travel',
    'retraction_count_max',
    'retraction_extrusion_window',
    'limit_support_retractions',
    'retraction_combing',
    'retraction_combing_max_distance',
    'travel_retract_before_outer_wall',
    'travel_avoid_other_parts',
    'travel_avoid_supports',
    'travel_avoid_distance',
    'layer_start_x',
    'layer_start_y',
    'retraction_hop_only_when_collides',
    'retraction_hop_after_extruder_switch_height',
    'cool_fan_speed_min',
    'cool_fan_speed_max',
    'cool_min_layer_time_fan_speed_max',
    'cool_fan_speed_0',
    'cool_fan_full_layer',
    'cool_min_layer_time',
    'cool_min_speed',
    'cool_lift_head',
    'support_infill_extruder_nr',
    'support_extruder_nr_layer_0',
    'support_roof_extruder_nr',
    'support_bottom_extruder_nr',
    'support_structure',
    'support_tree_angle',
    'support_tree_branch_distance',
    'support_tree_branch_diameter',
    'support_tree_branch_diameter_angle',
    'support_tree_collision_resolution',
    'zig_zaggify_support',
    'support_connect_zigzags',
    'support_line_distance',
    'support_initial_layer_line_distance',
    'support_infill_angles',
    'support_brim_enable',
    'support_top_distance',
    'support_bottom_distance',
    'support_xy_distance',
    'support_xy_overrides_z',
    'support_xy_distance_overhang',
    'support_bottom_stair_step_height',
    'support_bottom_stair_step_width',
    'support_bottom_stair_step_min_slope',
    'support_join_distance',
    'support_offset',
    'support_infill_sparse_thickness',
    'gradual_support_infill_steps',
    'gradual_support_infill_step_height',
    'minimum_support_area',
    'support_roof_enable',
    'support_bottom_enable',
    'support_roof_height',
    'support_bottom_height',
    'support_interface_skip_height',
    'support_roof_line_distance',
    'support_bottom_line_distance',
    'support_roof_pattern',
    'support_bottom_pattern',
    'minimum_roof_area',
    'minimum_bottom_area',
    'support_roof_offset',
    'support_bottom_offset',
    'support_roof_angles',
    'support_bottom_angles',
    'support_fan_enable',
    'support_supported_skin_fan_speed',
    'support_use_towers',
    'support_tower_diameter',
    'support_tower_maximum_supported_diameter',
    'support_tower_roof_angle',
    'support_mesh_drop_down',
    'support_meshes_present',
    'prime_blob_enable',
    'extruder_prime_pos_x',
    'extruder_prime_pos_y',
    'skirt_gap',
    'skirt_brim_minimal_length',
    'brim_gap',
    'brim_replaces_support',
    'brim_outside_only',
    'raft_smoothing',
    'raft_airgap',
    'layer_0_z_overlap',
    'raft_surface_layers',
    'raft_surface_thickness',
    'raft_surface_line_width',
    'raft_surface_line_spacing',
    'raft_interface_thickness',
    'raft_interface_line_spacing',
    'raft_surface_speed',
    'raft_interface_speed',
    'raft_base_speed',
    'raft_surface_acceleration',
    'raft_interface_acceleration',
    'raft_base_acceleration',
    'raft_surface_jerk',
    'raft_interface_jerk',
    'raft_base_jerk',
    'raft_surface_fan_speed',
    'raft_interface_fan_speed',
    'raft_base_fan_speed',
    'prime_tower_enable',
    'prime_tower_size',
    'prime_tower_min_volume',
    'prime_tower_position_x',
    'prime_tower_position_y',
    'prime_tower_wipe_enabled',
    'prime_tower_brim_enable',
    'ooze_shield_enabled',
    'ooze_shield_angle',
    'ooze_shield_dist',
    'switch_extruder_retraction_amount',
    'switch_extruder_retraction_speed',
    'switch_extruder_prime_speed',
    'switch_extruder_extra_prime_amount',
    'meshfix_union_all',
    'meshfix_union_all_remove_holes',
    'meshfix_extensive_stitching',
    'meshfix_keep_open_polygons',
    'multiple_mesh_overlap',
    'carve_multiple_volumes',
    'alternate_carve_order',
    'remove_empty_first_layers',
    'meshfix_maximum_resolution',
    'meshfix_maximum_travel_resolution',
    'meshfix_maximum_deviation',
    'print_sequence',
    'infill_mesh',
    'infill_mesh_order',
    'cutting_mesh',
    'mold_width',
    'mold_roof_height',
    'mold_angle',
    'support_mesh',
    'anti_overhang_mesh',
    'smooth_spiralized_contours',
    'relative_extrusion',
    'slicing_tolerance',
    'roofing_line_width',
    'roofing_pattern',
    'roofing_angles',
    'infill_enable_travel_optimization',
    'material_flow_dependent_temperature',
    'material_flow_temp_graph',
    'minimum_polygon_circumference',
    'support_skip_some_zags',
    'support_zag_skip_count',
    'draft_shield_enabled',
    'draft_shield_dist',
    'draft_shield_height_limitation',
    'draft_shield_height',
    'conical_overhang_enabled',
    'coasting_enable',
    'coasting_volume',
    'coasting_min_volume',
    'coasting_speed',
    'cross_infill_pocket_size',
    'cross_infill_density_image',
    'cross_support_density_image',
    'support_conical_enabled',
    'support_conical_angle',
    'support_conical_min_width',
    'magic_fuzzy_skin_enabled',
    'magic_fuzzy_skin_outside_only',
    'magic_fuzzy_skin_thickness',
    'magic_fuzzy_skin_point_dist',
    'flow_rate_max_extrusion_offset',
    'flow_rate_extrusion_offset_factor',
    'wireframe_enabled',
    'wireframe_height',
    'wireframe_roof_inset',
    'wireframe_printspeed_bottom',
    'wireframe_printspeed_up',
    'wireframe_printspeed_down',
    'wireframe_printspeed_flat',
    'wireframe_flow_connection',
    'wireframe_flow_flat',
    'wireframe_top_delay',
    'wireframe_bottom_delay',
    'wireframe_flat_delay',
    'wireframe_up_half_speed',
    'wireframe_top_jump',
    'wireframe_fall_down',
    'wireframe_drag_along',
    'wireframe_strategy',
    'wireframe_straight_before_down',
    'wireframe_roof_fall_down',
    'wireframe_roof_drag_along',
    'wireframe_roof_outer_delay',
    'wireframe_nozzle_clearance',
    'adaptive_layer_height_enabled',
    'adaptive_layer_height_variation',
    'adaptive_layer_height_variation_step',
    'adaptive_layer_height_threshold',
    'wall_overhang_angle',
    'wall_overhang_speed_factor',
    'bridge_settings_enabled',
    'bridge_wall_min_length',
    'bridge_skin_support_threshold',
    'bridge_sparse_infill_max_density',
    'bridge_wall_coast',
    'bridge_wall_speed',
    'bridge_wall_material_flow',
    'bridge_skin_speed',
    'bridge_skin_material_flow',
    'bridge_skin_density',
    'bridge_fan_speed',
    'bridge_enable_more_layers',
    'bridge_skin_speed_2',
    'bridge_skin_material_flow_2',
    'bridge_skin_density_2',
    'bridge_fan_speed_2',
    'bridge_skin_speed_3',
    'bridge_skin_material_flow_3',
    'bridge_skin_density_3',
    'bridge_fan_speed_3',
    'clean_between_layers',
    'max_extrusion_before_wipe',
    'wipe_retraction_enable',
    'wipe_retraction_amount',
    'wipe_retraction_extra_prime_amount',
    'wipe_retraction_retract_speed',
    'wipe_retraction_prime_speed',
    'wipe_pause',
    'wipe_hop_enable',
    'wipe_hop_amount',
    'wipe_hop_speed',
    'wipe_brush_pos_x',
    'wipe_repeat_count',
    'wipe_move_distance',
    'small_feature_max_length',
    'small_feature_speed_factor',
    'small_feature_speed_factor_0',
    'center_object',
    'mesh_position_x',
    'mesh_position_y',
    'mesh_position_z',
    'mesh_rotation_matrix'
];
export const PRINTING_MATERIAL_CONFIG_GROUP = [
    {
        fields: [
            'material_diameter',
            'material_flow',
            'material_print_temperature',
            'material_print_temperature_layer_0',
            'cool_fan_speed',
            'machine_heated_bed',
            'material_bed_temperature',
            'material_bed_temperature_layer_0',
            'material_flow_layer_0'
        ]
    }
];
export const PRINTING_QUALITY_CONFIG_GROUP = [
    {
        name: 'Quality',
        fields: [
            'layer_height',
            'layer_height_0',
            'initial_layer_line_width_factor'
        ]
    },
    {
        name: 'Shell',
        fields: [
            'wall_thickness',
            'top_thickness',
            'bottom_thickness',
            'outer_inset_first'
        ]
    },
    {
        name: 'Infill',
        fields: [
            'infill_sparse_density',
            'infill_pattern'
        ]
    },
    {
        name: 'Speed',
        fields: [
            // 'speed_print',
            'speed_print_layer_0',
            'speed_infill',
            'speed_wall_0',
            'speed_wall_x',
            'speed_topbottom',
            'speed_travel',
            'speed_travel_layer_0'
        ]
    },
    {
        name: 'Retract & Z Hop',
        fields: [
            'retraction_enable',
            'retract_at_layer_change',
            'retraction_amount',
            'retraction_speed',
            'retraction_hop_enabled',
            'retraction_hop'
        ]
    },
    {
        name: 'Surface',
        fields: [
            'magic_spiralize',
            'magic_mesh_surface_mode'
        ]
    },
    {
        name: 'Heated Bed Adhesion Type',
        fields: [
            'adhesion_type',
            'skirt_line_count',
            'brim_line_count',
            'raft_margin'
        ]
    },
    {
        name: 'Support',
        fields: [
            'support_enable',
            'support_type',
            'support_pattern',
            'support_infill_rate',
            'support_z_distance',
            // 'support_xy_distance',
            // 'support_xy_overrides_z',
            'support_angle'
        ]
    },
    {
        'name': 'All Machine',
        'fields': [
            'machine_extruder_count',
            'extruders_enabled_count'
        ]
    },
    {
        'name': 'All Quality',
        'fields': [
            'wall_line_width_0',
            'wall_line_width_x',
            'skin_line_width',
            'infill_line_width',
            'skirt_brim_line_width',
            'support_line_width',
            'support_roof_line_width',
            'support_bottom_line_width',
            'prime_tower_line_width'
        ]
    },
    {
        'name': 'All Shell',
        'fields': [
            'wall_0_extruder_nr',
            'wall_x_extruder_nr',
            'wall_line_count',
            'wall_0_wipe_dist',
            'roofing_extruder_nr',
            'roofing_layer_count',
            'top_bottom_extruder_nr',
            'top_layers',
            'bottom_layers',
            'initial_bottom_layers',
            'top_bottom_pattern',
            'top_bottom_pattern_0',
            'connect_skin_polygons',
            'skin_angles',
            'wall_0_inset',
            'alternate_extra_perimeter',
            'travel_compensate_overlapping_walls_0_enabled',
            'travel_compensate_overlapping_walls_x_enabled',
            'wall_min_flow',
            'wall_min_flow_retract',
            'fill_perimeter_gaps',
            'filter_out_tiny_gaps',
            'fill_outline_gaps',
            'xy_offset',
            'xy_offset_layer_0',
            'hole_xy_offset',
            'z_seam_type',
            'z_seam_x',
            'z_seam_y',
            'z_seam_corner',
            'skin_no_small_gaps_heuristic',
            'skin_outline_count',
            'ironing_enabled',
            'ironing_only_highest_layer',
            'ironing_pattern',
            'ironing_line_spacing',
            'ironing_flow',
            'ironing_inset',
            'speed_ironing',
            'acceleration_ironing',
            'jerk_ironing',
            'skin_overlap_mm'
        ]
    },
    {
        'name': 'All Infill',
        'fields': [
            'infill_extruder_nr',
            'infill_line_distance',
            'zig_zaggify_infill',
            'connect_infill_polygons',
            'infill_angles',
            'infill_offset_x',
            'infill_offset_y',
            'infill_randomize_start_location',
            'infill_multiplier',
            'infill_wall_line_count',
            'sub_div_rad_add',
            'infill_overlap_mm',
            'infill_wipe_dist',
            'infill_sparse_thickness',
            'gradual_infill_steps',
            'gradual_infill_step_height',
            'infill_before_walls',
            'min_infill_area',
            'infill_support_enabled',
            'infill_support_angle',
            'top_skin_preshrink',
            'bottom_skin_preshrink',
            'top_skin_expand_distance',
            'bottom_skin_expand_distance',
            'min_skin_width_for_expansion',
            'skin_edge_support_layers'
        ]
    },
    {
        'name': 'All Material',
        'fields': [
            'default_material_print_temperature',
            'build_volume_temperature',
            'material_initial_print_temperature',
            'material_extrusion_cool_down_speed',
            'material_adhesion_tendency',
            'material_surface_energy',
            'material_shrinkage_percentage',
            'material_crystallinity',
            'material_anti_ooze_retracted_position',
            'material_anti_ooze_retraction_speed',
            'material_break_preparation_retracted_position',
            'material_break_preparation_speed',
            'material_break_preparation_temperature',
            'material_break_retracted_position',
            'material_break_speed',
            'material_break_temperature',
            'material_flush_purge_speed',
            'material_flush_purge_length',
            'material_end_of_filament_purge_speed',
            'material_end_of_filament_purge_length',
            'material_maximum_park_duration',
            'material_no_load_move_factor',
            'wall_0_material_flow',
            'wall_x_material_flow',
            'skin_material_flow',
            'roofing_material_flow',
            'infill_material_flow',
            'skirt_brim_material_flow',
            'support_material_flow',
            'support_roof_material_flow',
            'support_bottom_material_flow',
            'prime_tower_flow',
            'material_standby_temperature'
        ]
    },
    {
        'name': 'All Speed',
        'fields': [
            'speed_roofing',
            'speed_support_infill',
            'speed_support_roof',
            'speed_support_bottom',
            'speed_prime_tower',
            'skirt_brim_speed',
            'speed_z_hop',
            'speed_equalize_flow_enabled',
            'speed_equalize_flow_max',
            'acceleration_enabled',
            'acceleration_infill',
            'acceleration_wall_0',
            'acceleration_wall_x',
            'acceleration_roofing',
            'acceleration_topbottom',
            'acceleration_support_infill',
            'acceleration_support_roof',
            'acceleration_support_bottom',
            'acceleration_prime_tower',
            'acceleration_travel',
            'acceleration_print_layer_0',
            'acceleration_travel_layer_0',
            'acceleration_skirt_brim',
            'jerk_enabled',
            'jerk_infill',
            'jerk_wall_0',
            'jerk_wall_x',
            'jerk_roofing',
            'jerk_topbottom',
            'jerk_support_infill',
            'jerk_support_roof',
            'jerk_support_bottom',
            'jerk_prime_tower',
            'jerk_travel',
            'jerk_print_layer_0',
            'jerk_travel_layer_0',
            'jerk_skirt_brim'
        ]
    },
    {
        'name': 'All Travel',
        'fields': [
            'retraction_retract_speed',
            'retraction_prime_speed',
            'retraction_extra_prime_amount',
            'retraction_min_travel',
            'retraction_count_max',
            'retraction_extrusion_window',
            'limit_support_retractions',
            'retraction_combing',
            'retraction_combing_max_distance',
            'travel_retract_before_outer_wall',
            'travel_avoid_other_parts',
            'travel_avoid_supports',
            'travel_avoid_distance',
            'layer_start_x',
            'layer_start_y',
            'retraction_hop_only_when_collides',
            'retraction_hop_after_extruder_switch_height'
        ]
    },
    {
        'name': 'All Cooling',
        'fields': [
            'cool_fan_speed_min',
            'cool_fan_speed_max',
            'cool_min_layer_time_fan_speed_max',
            'cool_fan_speed_0',
            'cool_fan_full_layer',
            'cool_min_layer_time',
            'cool_min_speed',
            'cool_lift_head'
        ]
    },
    {
        'name': 'All Support',
        'fields': [
            'support_infill_extruder_nr',
            'support_extruder_nr_layer_0',
            'support_roof_extruder_nr',
            'support_bottom_extruder_nr',
            'support_structure',
            'support_tree_angle',
            'support_tree_branch_distance',
            'support_tree_branch_diameter',
            'support_tree_branch_diameter_angle',
            'support_tree_collision_resolution',
            'zig_zaggify_support',
            'support_connect_zigzags',
            'support_line_distance',
            'support_initial_layer_line_distance',
            'support_infill_angles',
            'support_brim_enable',
            'support_top_distance',
            'support_bottom_distance',
            'support_xy_distance',
            'support_xy_overrides_z',
            'support_xy_distance_overhang',
            'support_bottom_stair_step_height',
            'support_bottom_stair_step_width',
            'support_bottom_stair_step_min_slope',
            'support_join_distance',
            'support_offset',
            'support_infill_sparse_thickness',
            'gradual_support_infill_steps',
            'gradual_support_infill_step_height',
            'minimum_support_area',
            'support_roof_enable',
            'support_bottom_enable',
            'support_roof_height',
            'support_bottom_height',
            'support_interface_skip_height',
            'support_roof_line_distance',
            'support_bottom_line_distance',
            'support_roof_pattern',
            'support_bottom_pattern',
            'minimum_roof_area',
            'minimum_bottom_area',
            'support_roof_offset',
            'support_bottom_offset',
            'support_roof_angles',
            'support_bottom_angles',
            'support_fan_enable',
            'support_supported_skin_fan_speed',
            'support_use_towers',
            'support_tower_diameter',
            'support_tower_maximum_supported_diameter',
            'support_tower_roof_angle',
            'support_mesh_drop_down',
            'support_meshes_present'
        ]
    },
    {
        'name': 'All Build Plate Adhesion',
        'fields': [
            'prime_blob_enable',
            'extruder_prime_pos_x',
            'extruder_prime_pos_y',
            'skirt_gap',
            'skirt_brim_minimal_length',
            'brim_gap',
            'brim_replaces_support',
            'brim_outside_only',
            'raft_smoothing',
            'raft_airgap',
            'layer_0_z_overlap',
            'raft_surface_layers',
            'raft_surface_thickness',
            'raft_surface_line_width',
            'raft_surface_line_spacing',
            'raft_interface_thickness',
            'raft_interface_line_spacing',
            'raft_surface_speed',
            'raft_interface_speed',
            'raft_base_speed',
            'raft_surface_acceleration',
            'raft_interface_acceleration',
            'raft_base_acceleration',
            'raft_surface_jerk',
            'raft_interface_jerk',
            'raft_base_jerk',
            'raft_surface_fan_speed',
            'raft_interface_fan_speed',
            'raft_base_fan_speed'
        ]
    },
    {
        'name': 'All Dual Extrusion',
        'fields': [
            'prime_tower_enable',
            'prime_tower_size',
            'prime_tower_min_volume',
            'prime_tower_position_x',
            'prime_tower_position_y',
            'prime_tower_wipe_enabled',
            'prime_tower_brim_enable',
            'ooze_shield_enabled',
            'ooze_shield_angle',
            'ooze_shield_dist',
            'switch_extruder_retraction_amount',
            'switch_extruder_retraction_speed',
            'switch_extruder_prime_speed',
            'switch_extruder_extra_prime_amount'
        ]
    },
    {
        'name': 'All Mesh Fixes',
        'fields': [
            'meshfix_union_all',
            'meshfix_union_all_remove_holes',
            'meshfix_extensive_stitching',
            'meshfix_keep_open_polygons',
            'multiple_mesh_overlap',
            'carve_multiple_volumes',
            'alternate_carve_order',
            'remove_empty_first_layers',
            'meshfix_maximum_resolution',
            'meshfix_maximum_travel_resolution',
            'meshfix_maximum_deviation'
        ]
    },
    {
        'name': 'All Special Modes',
        'fields': [
            'print_sequence',
            'infill_mesh',
            'infill_mesh_order',
            'cutting_mesh',
            'mold_width',
            'mold_roof_height',
            'mold_angle',
            'support_mesh',
            'anti_overhang_mesh',
            'smooth_spiralized_contours',
            'relative_extrusion'
        ]
    },
    {
        'name': 'All Experimental',
        'fields': [
            'slicing_tolerance',
            'roofing_line_width',
            'roofing_pattern',
            'roofing_angles',
            'infill_enable_travel_optimization',
            'material_flow_dependent_temperature',
            'material_flow_temp_graph',
            'minimum_polygon_circumference',
            'support_skip_some_zags',
            'support_zag_skip_count',
            'draft_shield_enabled',
            'draft_shield_dist',
            'draft_shield_height_limitation',
            'draft_shield_height',
            'conical_overhang_enabled',
            'coasting_enable',
            'coasting_volume',
            'coasting_min_volume',
            'coasting_speed',
            'cross_infill_pocket_size',
            'cross_infill_density_image',
            'cross_support_density_image',
            'support_conical_enabled',
            'support_conical_angle',
            'support_conical_min_width',
            'magic_fuzzy_skin_enabled',
            'magic_fuzzy_skin_outside_only',
            'magic_fuzzy_skin_thickness',
            'magic_fuzzy_skin_point_dist',
            'flow_rate_max_extrusion_offset',
            'flow_rate_extrusion_offset_factor',
            'wireframe_enabled',
            'wireframe_height',
            'wireframe_roof_inset',
            'wireframe_printspeed_bottom',
            'wireframe_printspeed_up',
            'wireframe_printspeed_down',
            'wireframe_printspeed_flat',
            'wireframe_flow_connection',
            'wireframe_flow_flat',
            'wireframe_top_delay',
            'wireframe_bottom_delay',
            'wireframe_flat_delay',
            'wireframe_up_half_speed',
            'wireframe_top_jump',
            'wireframe_fall_down',
            'wireframe_drag_along',
            'wireframe_strategy',
            'wireframe_straight_before_down',
            'wireframe_roof_fall_down',
            'wireframe_roof_drag_along',
            'wireframe_roof_outer_delay',
            'wireframe_nozzle_clearance',
            'adaptive_layer_height_enabled',
            'adaptive_layer_height_variation',
            'adaptive_layer_height_variation_step',
            'adaptive_layer_height_threshold',
            'wall_overhang_angle',
            'wall_overhang_speed_factor',
            'bridge_settings_enabled',
            'bridge_wall_min_length',
            'bridge_skin_support_threshold',
            'bridge_sparse_infill_max_density',
            'bridge_wall_coast',
            'bridge_wall_speed',
            'bridge_wall_material_flow',
            'bridge_skin_speed',
            'bridge_skin_material_flow',
            'bridge_skin_density',
            'bridge_fan_speed',
            'bridge_enable_more_layers',
            'bridge_skin_speed_2',
            'bridge_skin_material_flow_2',
            'bridge_skin_density_2',
            'bridge_fan_speed_2',
            'bridge_skin_speed_3',
            'bridge_skin_material_flow_3',
            'bridge_skin_density_3',
            'bridge_fan_speed_3',
            'clean_between_layers',
            'max_extrusion_before_wipe',
            'wipe_retraction_enable',
            'wipe_retraction_amount',
            'wipe_retraction_extra_prime_amount',
            'wipe_retraction_retract_speed',
            'wipe_retraction_prime_speed',
            'wipe_pause',
            'wipe_hop_enable',
            'wipe_hop_amount',
            'wipe_hop_speed',
            'wipe_brush_pos_x',
            'wipe_repeat_count',
            'wipe_move_distance',
            'small_feature_max_length',
            'small_feature_speed_factor',
            'small_feature_speed_factor_0'
        ]
    },
    {
        'name': 'All Command Line Settings',
        'fields': [
            'center_object',
            'mesh_position_x',
            'mesh_position_y',
            'mesh_position_z',
            'mesh_rotation_matrix'
        ]
    }
];

export const PRINTING_QUALITY_CUSTOMIZE_FIELDS = [
    'layer_height',
    'infill_sparse_density',
    'wall_thickness',
    'adhesion_type',
    'support_enable'
];
export const PRINTING_QUALITY_CONFIG_INDEX = {
    'retraction_amount': 1,
    'retraction_speed': 1,
    'retraction_hop_enabled': 1,
    'retraction_hop': 2,
    'support_type': 1,
    'skirt_line_count': 1,
    'brim_line_count': 1,
    'raft_margin': 1
};
export const PRINTING_MANAGER_TYPE_MATERIAL = 'material';
export const PRINTING_MANAGER_TYPE_QUALITY = 'quality';

export const CNC_TOOL_CONFIG_GROUP = [
    {
        name: 'Carving Tool',
        fields: [
            'diameter',
            'angle',
            'shaft_diameter'
        ]
    },
    {
        name: 'Parameters',
        fields: [
            'jog_speed',
            'work_speed',
            'plunge_speed',
            'step_down',
            'step_over'
        ]
    }
];

export const CNC_DEFAULT_GCODE_PARAMETERS_DEFINITION = {
    'allowance': {
        label: 'Allowance',
        description: 'Set the amount of the material remaining on the object that needs to be carved in future operations.',
        min: 0,
        step: 0.1,
        unit: 'mm',
        type: 'float',
        default_value: 0.1,
        value: 'allowance'
    },
    'sliceMode': {
        label: 'Slicing Mode',
        description: 'Select the slicing mode of the mesh toolpath',
        type: 'enum',
        options: {
            'rotation': 'Rotation',
            'linkage': 'Linkage'
        },
        default_value: 'rotation'
    },
    'pathType': {
        label: 'Method',
        description: 'Set the processing method of the object.\n -On the Path: Carves along the shape of the object. \n -Outline: Carves along the outline of the object.\n -Fill: Carves away the inner area of the object.',
        type: 'enum',
        options: {
            'path': 'On the Path',
            'outline': 'Outline',
            'pocket': 'Fill'
        },
        default_value: 'path'
    },
    'targetDepth': {
        label: 'Target Depth',
        description: 'Set the depth of the object to be carved. The depth should be smaller than the flute length.',
        min: 0.01,
        step: 0.1,
        max: 100,
        value: 'targetDepth',
        default_value: 'targetDepth',
        type: 'float',
        unit: 'mm'
    },
    'safetyHeight': {
        label: 'Jog Height',
        description: 'Set the distance between the tool and the material when the tool is not carving.',
        min: 0.1,
        step: 1,
        max: 100,
        value: 'safetyHeight',
        default_value: 'safetyHeight',
        type: 'float',
        unit: 'mm'
    },
    'stopHeight': {
        label: 'Stop Height',
        description: 'Set the distance between the tool and the material when the tool stops.',
        min: 0.1,
        step: 0.1,
        max: 100,
        value: 'stopHeight',
        default_value: 'stopHeight',
        type: 'float',
        unit: 'mm'
    },
    'enableTab': {
        label: 'Use Tab',
        description: 'Use tabs to hold the pieces in place.',
        type: 'bool',
        default_value: false,
        value: 'enableTab'
    },
    'tabHeight': {
        label: 'Tab Height',
        description: 'Set the height of tabs.',
        // min: '-targetDepth',
        max: 10,
        step: 0.1,
        value: 'tabHeight',
        default_value: 'tabHeight',
        type: 'float',
        unit: 'mm'
    },
    'tabSpace': {
        label: 'Tab Space',
        description: 'Set the distance between each tab.',
        min: 1,
        step: 1,
        value: 'tabSpace',
        default_value: 'tabSpace',
        type: 'float',
        unit: 'mm'
    },
    'tabWidth': {
        label: 'Tab Width',
        description: 'Set the width of tabs.',
        min: 1,
        step: 1,
        value: 'tabWidth',
        default_value: 'tabWidth',
        type: 'float',
        unit: 'mm'
    },
    'stepOver': {
        label: 'Stepover',
        description: 'Set the space between parallel toolpaths.',
        min: 0.01,
        step: 0.01,
        default_value: 0.25,
        value: 'step_over',
        type: 'float',
        unit: 'mm'
    },
    'workSpeed': {
        description: 'Set the speed at which the tool moves on the material when it is carving.',
        label: 'Work Speed',
        min: 0.01,
        step: 0.01,
        default_value: 0.25,
        value: 'step_over',
        unit: 'mm/min',
        type: 'float'
    },
    'plungeSpeed': {
        default_value: 300,
        type: 'float',
        min: 0.1,
        max: 1000,
        step: 0.01,
        label: 'Plunge Speed',
        unit: 'mm/min',
        description: 'Set the speed at which the tool is driven down into the material.'
    },
    'jogSpeed': {
        default_value: 1500,
        type: 'float',
        min: 1,
        max: 6000,
        step: 0.01,
        label: 'Jog Speed',
        unit: 'mm/min',
        description: 'Set the speed at which the tool moves on the material when it is not carving.'
    },
    'stepDown': {
        default_value: 0.5,
        type: 'float',
        min: 0.01,
        step: 0.01,
        label: 'Stepdown',
        description: 'Set the distance along the Z axis per step that the tool is plunged into the material.',
        unit: 'mm'
    }
};

export const LASER_DEFAULT_GCODE_PARAMETERS_DEFINITION = {
    'fillEnabled': {
        description: 'Set the processing method of the object. \n - Fill: Fills the object with lines or dots.\n - On the Path: Engraves along the shape of the object.',
        label: 'Method', // 'Fill'
        type: 'enum',
        default_value: 'false',
        options: {
            false: 'On the Path',
            true: 'Fill'
        }
    },
    'workSpeed': {
        label: 'Work Speed',
        description: 'Set the speed at which the toolhead moves on the material when it is engraving or cutting.',
        type: 'float',
        min: 1,
        max: 6000,
        step: 1,
        default_value: 'workSpeed',
        unit: 'mm/min'
    },
    'multiPasses': {
        label: 'Number of Passes',
        description: 'Set how many times the laser will trace the same path in a G-code file.',
        type: 'float',
        min: 1,
        max: 50,
        default_value: 'passes'
    },
    'multiPassDepth': {
        label: 'Z Step per Pass',
        description: 'Set the amount at which the Laser Module is lowered with each pass.',
        type: 'float',
        min: 0.01,
        max: 10,
        default_value: 'passDepth',
        unit: 'mm'
    },
    'fixedPower': {
        label: 'Laser Power',
        description: 'Set the laser power.',
        type: 'float',
        min: 0,
        max: 100,
        default_value: 'fixedPower',
        unit: '%'
    },
    'movementMode': {
        label: 'Movement Mode',
        description: 'Set whether the object is filled with lines or dots.',
        type: 'enum',
        options: {
            'greyscale-line': 'Line', // 'Line (Normal Quality)',
            'greyscale-dot': 'Dot' // 'Dot (High Quality)'
        },
        default_value: 'greyscale-line'
    },
    'fillInterval': {
        label: 'Fill Interval',
        description: 'Set the degree to which an area is filled with laser lines or dots. The minimal interval is 0.05 mm.',
        type: 'float',
        min: 0.05,
        // max: 1,
        step: 0.01,
        default_value: 0.25,
        value: 'fillInterval',
        unit: 'mm'
    },
    'fillDensity': {
        label: 'Fill Density',
        description: 'Set the precision at which an area is carved. The highest density is 0.05 mm (20 dot/mm). When it is set to 0, the SVG image will be carved without fill.',
        type: 'float',
        min: 1,
        max: 10,
        step: 1,
        default_value: 1,
        unit: 'dot/mm'
    },
    'density': {
        label: 'Density',
        description: 'Determines how fine and smooth the engraved picture will be. \
The bigger this value is, the better quality you will get. The range is 1-10 dot/mm and 10 is recommended.',
        type: 'float',
        min: 1,
        max: 10,
        step: 1,
        default_value: 'density',
        unit: 'dot/mm'
    },
    'dwellTime': {
        label: 'Dwell Time',
        description: 'Determines how long the laser keeps on when it’s engraving a dot.',
        type: 'float',
        min: 0.1,
        max: 1000,
        step: 0.1,
        default_value: 'dwellTime',
        value: 'dwellTime',
        unit: 'ms/dot'
    },
    'jogSpeed': {
        label: 'Jog Speed',
        description: 'Set the speed at which the toolhead moves on the material when it is not engraving or cutting.',
        min: 1,
        max: 6000,
        step: 1,
        type: 'float',
        unit: 'mm/min',
        default_value: 1500,
        value: 'jogSpeed'
    },
    'direction': {
        label: 'Line Direction',
        description: 'Set the direction of the engraved path. Engraves the path in a horizontal, vertical, or diagonal direction.',
        options: {
            Horizontal: 'Horizontal',
            Vertical: 'Vertical',
            Diagonal: 'Diagonal',
            Diagonal2: 'Diagonal2'
        },
        type: 'enum',
        default_value: 'direction',
        value: 'direction'
    }
};

const publicPath = global.PUBLIC_PATH || '';
export const DATA_PATH = `${publicPath}/data`;

export const DATA_PREFIX = `${publicPath}/data/Tmp`;

export const CNC_TOOL_SNAP_V_BIT = 'snap.v-bit';
export const CNC_TOOL_SNAP_V_BIT_CONFIG = { diameter: 0.2, angle: 30, shaftDiameter: 3.175 };
export const CNC_TOOL_SNAP_FLAT_END_MILL = 'snap.flat-end-mill';
export const CNC_TOOL_SNAP_FLAT_END_MILL_CONFIG = { diameter: 1.5, angle: 180, shaftDiameter: 1.5 };
export const CNC_TOOL_SNAP_BALL_END_MILL = 'snap.ball-end-mill';
export const CNC_TOOL_SNAP_BALL_END_MILL_CONFIG = { diameter: 3.175, angle: 180, shaftDiameter: 3.175 };
export const CNC_TOOL_SNAP_S_F_S = 'snap.straight-flute-sharp';
export const CNC_TOOL_SNAP_S_F_S_CONFIG = { diameter: 0.3, angle: 20, shaftDiameter: 3.715 };
export const CNC_TOOL_CUSTOM = 'custom';
export const CNC_TOOL_CUSTOM_CONFIG = { diameter: 0.1, angle: 180, shaftDiameter: 3.175 };

export const LASER_GCODE_SUFFIX = '.nc';
export const CNC_GCODE_SUFFIX = '.cnc';
export const PRINTING_GCODE_SUFFIX = '.gcode';

// Replacements for null value
export const ABSENT_VALUE = 896745231;
export const ABSENT_OBJECT = Object.freeze({});

// Experimental features
export const EXPERIMENTAL_WIFI_CONTROL = true;
export const EXPERIMENTAL_LASER_CAMERA = false;
export const EXPERIMENTAL_IMAGE_TRACING = false;
export const EXPERIMENTAL_IMAGE_TRACING_CNC = false;
export const EXPERIMENTAL_PROFILE = true;

export const PROTOCOL_TEXT = 'text';
export const PROTOCOL_SCREEN = 'screen';

export const MAX_LINE_POINTS = 300;
export const TEMPERATURE_MIN = 0;
export const TEMPERATURE_MAX = 300;
export const SPEED_FACTOR_MIN = 0;
export const SPEED_FACTOR_MAX = 500;

export const HEAD_3DP = '3dp';
export const HEAD_LASER = 'laser';
export const HEAD_CNC = 'cnc';
export const HEAD_UNKNOWN = 'unknown';

export const CONNECTION_TYPE_SERIAL = 'serial';
export const CONNECTION_TYPE_WIFI = 'wifi';

export const LASER_PRINT_MODE_AUTO = 'auto';
export const LASER_PRINT_MODE_MANUAL = 'manual';

export const SELECTEVENT = {
    UNSELECT_ADDSELECT: 'select:unSelect-addSelect',
    UNSELECT: 'select:unSelect',
    ADDSELECT: 'select:addSelect',
    REMOVESELECT: 'select:removeSelect'
};

// todo: refactor this data structure
export const MACHINE_SERIES = {
    ORIGINAL: {
        value: 'Original',
        label: 'Snapmaker Original',
        setting: {
            size: {
                x: 125,
                y: 125,
                z: 125
            },
            laserSize: {
                x: 125,
                y: 125,
                z: 125
            }
        }
    },
    ORIGINAL_LZ: {
        value: 'Original Long Z-axis',
        configPath: 'Original',
        label: 'Snapmaker Original with Z-axis Extension Module',
        setting: {
            size: {
                x: 125,
                y: 125,
                z: 221
            },
            laserSize: {
                x: 125,
                y: 125,
                z: 221
            }
        }
    },
    A150: {
        value: 'A150',
        label: 'Snapmaker 2.0 A150',
        setting: {
            size: {
                x: 160,
                y: 160,
                z: 145
            },
            laserSize: {
                x: 167,
                y: 165,
                z: 150
            }
        },
        alias: ['SM2-S', 'Snapmaker 2.0 A150']
    },
    A250: {
        value: 'A250',
        label: 'Snapmaker 2.0 A250',
        setting: {
            size: {
                x: 230,
                y: 250,
                z: 235
            },
            laserSize: {
                x: 252,
                y: 260,
                z: 235
            }
        },
        alias: ['SM2-M', 'Snapmaker 2.0 A250']

    },
    A350: {
        value: 'A350',
        label: 'Snapmaker 2.0 A350',
        setting: {
            size: {
                x: 320,
                y: 350,
                z: 330
            },
            laserSize: {
                x: 345,
                y: 357,
                z: 334
            }
        },
        alias: ['SM2-L', 'Snapmaker 2.0 A350']
    },
    CUSTOM: {
        value: 'Custom',
        label: 'Custom',
        setting: {
            size: {
                x: 125,
                y: 125,
                z: 125
            },
            laserSize: {
                x: 125,
                y: 125,
                z: 125
            }
        },
        alias: ['Custom']
    }
};

export const MACHINE_HEAD_TYPE = {
    WORKSPACE: {
        value: 'workspace',
        label: 'Workspace'
    },
    '3DP': {
        value: '3dp',
        label: '3D Printing',
        alias: ['3DP', '1']
    },
    LASER: {
        value: 'laser',
        label: 'Laser',
        alias: ['LASER', 'LASER350', 'LASER1600', '3']
    },
    CNC: {
        value: 'cnc',
        label: 'CNC',
        alias: ['CNC', '2']
    }
};

export const IMAGE_WIFI_CONNECTING = '/resources/images/connection/Screen.png';
export const IMAGE_WIFI_CONNECT_WAITING = '/resources/images/connection/ic_waiting-64x64.png';
export const IMAGE_WIFI_CONNECTED = '/resources/images/connection/ic_complete_64x64.png';
export const IMAGE_WIFI_ERROR = '/resources/images/connection/ic_error_64x64.png';
export const IMAGE_WIFI_WAITING = '/resources/images/connection/ic_WI-FI_64x64.png';
export const IMAGE_WIFI_WARNING = '/resources/images/ic_warning-64x64.png';
export const IMAGE_EMERGENCY_STOP = '/resources/images/connection/ic_emergency_stop.png';
export const HEAD_TYPE_ENV_NAME = {
    '3dp': '3D printing',
    'laser': 'Laser',
    'cnc': 'CNC'
};
export const LASER_MOCK_PLATE_HEIGHT = 6;


// Model
export const SOURCE_TYPE_3DP = '3dp';
export const SOURCE_TYPE_SVG = 'svg';
export const SOURCE_TYPE_TEXT = 'text';
export const SOURCE_TYPE_RASTER = 'raster';
export const SOURCE_TYPE_IMAGE3D = 'image3d';

export const PROCESS_MODE_BW = 'bw';
export const PROCESS_MODE_HALFTONE = 'halftone';
export const PROCESS_MODE_VECTOR = 'vector';
export const PROCESS_MODE_GREYSCALE = 'greyscale';
export const PROCESS_MODE_MESH = 'mesh';

export const PROCESS_MODE_ROTATION = 'rotation';
export const PROCESS_MODE_PLANE = 'plane';
export const PROCESS_MODE_4AXIS_LINKAGE = '4axisLinkage';

// 3D Mesh Convert 2D Image
export const FRONT = 'front';
export const BACK = 'back';
export const LEFT = 'left';
export const RIGHT = 'right';
export const TOP = 'top';
export const BOTTOM = 'bottom';

export const CNC_MESH_SLICE_MODE_ROTATION = 'rotation';
export const CNC_MESH_SLICE_MODE_LINKAGE = 'linkage';
export const CNC_MESH_SLICE_MODE_MULTI_DIRECTION = 'multi face';

export const TOOLPATH_TYPE_IMAGE = 'image';
export const TOOLPATH_TYPE_VECTOR = 'vector';
export const TOOLPATH_TYPE_SCULPT = 'sculpt';

export const DISPLAYED_TYPE_MODEL = 'model';
export const DISPLAYED_TYPE_TOOLPATH = 'toolpath';

// SVG Canvas coordinateMode
export const COORDINATE_MODE_CENTER = {
    label: 'Center',
    value: 'center',
    setting: {
        sizeMultiplyFactor: {
            x: 0,
            y: 0
        }
    }
};
export const COORDINATE_MODE_TOP_RIGHT = {
    label: 'Top Right',
    value: 'top-right',
    setting: {
        sizeMultiplyFactor: {
            x: -1,
            y: -1
        }
    }
};
export const COORDINATE_MODE_BOTTOM_RIGHT = {
    label: 'Bottom Right',
    value: 'bottom-right',
    setting: {
        sizeMultiplyFactor: {
            x: -1,
            y: 1
        }
    }
};
export const COORDINATE_MODE_TOP_LEFT = {
    label: 'Top Left',
    value: 'top-left',
    setting: {
        sizeMultiplyFactor: {
            x: 1,
            y: -1
        }
    }
};
export const COORDINATE_MODE_BOTTOM_LEFT = {
    label: 'Bottom Left',
    value: 'bottom-left',
    setting: {
        sizeMultiplyFactor: {
            x: 1,
            y: 1
        }
    }
};
export const COORDINATE_MODE_BOTTOM_CENTER = {
    label: 'Top',
    value: 'bottom-center',
    setting: {
        sizeMultiplyFactor: {
            x: 0,
            y: 1
        }
    }
};
export function getCurrentHeadType(pathname) {
    if (!pathname) {
        return null;
    }
    let headType = null;
    if (pathname.indexOf(HEAD_CNC) >= 0) headType = HEAD_CNC;
    if (pathname.indexOf(HEAD_LASER) >= 0) headType = HEAD_LASER;
    if (pathname.indexOf(HEAD_3DP) >= 0) headType = HEAD_3DP;
    return headType;
}


// Laser | CNC canvas min | max scale rate
export const MAX_LASER_CNC_CANVAS_SCALE = 4;
export const MIN_LASER_CNC_CANVAS_SCALE = 0.5;
export const SOFTWARE_MANUAL = 'https://support.snapmaker.com/hc/en-us/articles/4406229926935';
export const FORUM_URL = 'https://forum.snapmaker.com/';
export const SUPPORT_ZH_URL = 'https://support.snapmaker.com/hc/zh-cn';
export const SUPPORT_EN_URL = 'https://support.snapmaker.com/hc/en-us';
export const TUTORIAL_VIDEO_URL = 'https://www.youtube.com/playlist?list=PLEn5aHQNSrHWvLWgQwrnLPY6VcaYnTvcQ';
export const OFFICIAL_SITE_ZH_URL = 'https://snapmaker.cn/';
export const OFFICIAL_SITE_EN_URL = 'https://snapmaker.com/';
export const MARKET_ZH_URL = 'https://snapmaker.world.tmall.com/?spm=a1z10.3-b.w5001-21696184167.3.40be7f386PAuCQ&scene=taobao_shop';
export const MARKET_EN_URL = 'https://shop.snapmaker.com/';
export const MYMINIFACTORY_URL = 'https://www.myminifactory.com/';

// Project and Menu
// once you change this number, make sure the number in `electron-app/Menu.js` also changed
export const MAX_RECENT_FILES_LENGTH = 12;
