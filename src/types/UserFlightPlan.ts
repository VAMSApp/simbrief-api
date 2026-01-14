// To parse this data:
//
//   import { Convert, SimBriefFlightPlan } from "./file";
//
//   const simBriefFlightPlan = Convert.toSimBriefFlightPlan(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export type UserFlightPlan = {
    fetch:             Fetch;
    params:            Params;
    general:           General;
    origin:            Origin;
    destination:       Destination;
    alternate:         Alternate;
    alternate_navlog:  AlternateNavlog;
    takeoff_altn:      EnrouteAltn;
    enroute_altn:      EnrouteAltn;
    enroute_station:   EnrouteAltn;
    navlog:            Navlog;
    etops:             EnrouteAltn;
    tlr:               Tlr;
    atc:               Atc;
    aircraft:          Aircraft;
    fuel:              Fuel;
    fuel_extra:        FuelExtra;
    times:             Times;
    weights:           Weights;
    impacts:           Impacts;
    crew:              Crew;
    notams:            Notams;
    weather:           Weather;
    sigmets:           EnrouteAltn;
    text:              Text;
    tracks:            EnrouteAltn;
    database_updates:  DatabaseUpdates;
    files:             Files;
    fms_downloads:     FmsDownloads;
    images:            Images;
    links:             Links;
    prefile:           Prefile;
    vatsim_prefile:    string;
    ivao_prefile:      string;
    pilotedge_prefile: string;
    poscon_prefile:    string;
    map_data:          string;
    api_params:        ApiParams;
}

export type Aircraft = {
    icaocode:          string;
    iatacode:          EnrouteAltn;
    base_type:         string;
    list_type:         string;
    icao_code:         string;
    iata_code:         EnrouteAltn;
    name:              string;
    engines:           string;
    reg:               string;
    fin:               string;
    selcal:            EnrouteAltn;
    equip:             string;
    equip_category:    string;
    equip_navigation:  string;
    equip_transponder: string;
    fuelfact:          string;
    fuelfactor:        string;
    max_passengers:    string;
    supports_tlr:      string;
    internal_id:       string;
    is_custom:         string;
}

export type EnrouteAltn = {
}

export type Alternate = {
    icao_code:        IataCode;
    iata_code:        IataCode;
    faa_code:         EnrouteAltn;
    icao_region:      string;
    elevation:        string;
    pos_lat:          string;
    pos_long:         string;
    name:             Name;
    timezone:         string;
    plan_rwy:         string;
    trans_alt:        string;
    trans_level:      string;
    cruise_altitude:  string;
    distance:         string;
    gc_distance:      string;
    air_distance:     string;
    track_true:       string;
    track_mag:        string;
    tas:              string;
    gs:               string;
    avg_wind_comp:    string;
    avg_wind_dir:     string;
    avg_wind_spd:     string;
    avg_tropopause:   string;
    avg_tdv:          string;
    ete:              string;
    burn:             string;
    route:            string;
    route_ifps:       string;
    metar:            string;
    metar_time:       Date;
    metar_category:   string;
    metar_visibility: string;
    metar_ceiling:    string;
    taf:              string;
    taf_time:         Date;
    atis:             Ati;
    notam:            AlternateNotam[];
}

export type Ati = {
    network:  string;
    issued:   Date;
    letter:   string;
    phonetic: string;
    type:     string;
    message:  string;
}

export enum IataCode {
    Abq = "ABQ",
    FDC = "FDC",
    Iwa = "IWA",
    Kiwa = "KIWA",
    Kphx = "KPHX",
    Ktus = "KTUS",
    Kzab = "KZAB",
    Phx = "PHX",
    Suac = "SUAC",
    Tus = "TUS",
    Zab = "ZAB",
}

export enum Name {
    MesaGateway = "MESA GATEWAY",
    PhoenixMesaGateway = "PHOENIX-MESA GATEWAY",
    PhoenixSkyHarborIntl = "PHOENIX SKY HARBOR INTL",
    TucsonIntl = "TUCSON INTL",
    TusVortac = "TUS-VORTAC",
    ZabArtcc = "ZAB ARTCC",
}

export type AlternateNotam = {
    source_id:                FlightRules;
    account_id:               IataCode;
    notam_id:                 string;
    location_id:              IataCode;
    location_icao:            IataCode;
    location_name:            Name;
    location_type:            LocationType;
    date_created:             Date;
    date_effective:           Date;
    date_expire:              Date;
    date_expire_is_estimated: EnrouteAltn | string;
    date_modified:            Date;
    notam_schedule:           EnrouteAltn;
    notam_html:               string;
    notam_text:               string;
    notam_raw:                string;
    notam_nrc:                NotamNrcEnum;
    notam_qcode:              EnrouteAltn | string;
    notam_qcode_category:     LocationType;
    notam_qcode_subject:      EnrouteAltn | string;
    notam_qcode_status:       EnrouteAltn | NotamQcodeStatusEnum;
    notam_is_obstacle:        EnrouteAltn;
}

export enum LocationType {
    Airport = "Airport",
    ApproachProcedures = "Approach Procedures",
    Runway = "Runway",
    Sid = "SID",
}

export enum NotamNrcEnum {
    Notamn = "NOTAMN",
}

export enum NotamQcodeStatusEnum {
    Changed = "Changed",
    Closed = "Closed",
    Other = "Other",
    WorkInProgress = "Work in progress",
}

export enum FlightRules {
    D = "D",
    F = "F",
    I = "I",
    M = "M",
}

export type AlternateNavlog = {
    fix: AlternateNavlogFix[];
}

export type AlternateNavlogFix = {
    ident:             string;
    name:              string;
    type:              string;
    icao_region:       EnrouteAltn | string;
    region_code:       EnrouteAltn | string;
    frequency:         EnrouteAltn | string;
    pos_lat:           string;
    pos_long:          string;
    stage:             string;
    via_airway:        string;
    is_sid_star:       string;
    distance:          string;
    track_true:        string;
    track_mag:         string;
    heading_true:      string;
    heading_mag:       string;
    altitude_feet:     string;
    ind_airspeed:      string;
    true_airspeed:     string;
    mach:              string;
    mach_thousandths:  string;
    wind_component:    string;
    groundspeed:       string;
    time_leg:          string;
    time_total:        string;
    fuel_flow:         string;
    fuel_leg:          string;
    fuel_totalused:    string;
    fuel_min_onboard:  string;
    fuel_plan_onboard: string;
    oat:               string;
    oat_isa_dev:       string;
    wind_dir:          string;
    wind_spd:          string;
    shear:             string;
    tropopause_feet:   string;
    ground_height:     string;
    fir:               IataCode;
    fir_units:         string;
    fir_valid_levels:  string;
}

export type ApiParams = {
    airline:         string;
    fltnum:          string;
    type:            string;
    orig:            IataCode;
    dest:            IataCode;
    date:            string;
    dephour:         string;
    depmin:          string;
    route:           string;
    stehour:         string;
    stemin:          string;
    reg:             string;
    fin:             string;
    selcal:          EnrouteAltn;
    pax:             string;
    altn:            IataCode;
    fl:              EnrouteAltn;
    cpt:             string;
    pid:             string;
    fuelfactor:      string;
    manualpayload:   string;
    manualzfw:       string;
    taxifuel:        string;
    minfob:          string;
    minfob_units:    string;
    minfod:          string;
    minfod_units:    string;
    melfuel:         string;
    melfuel_units:   string;
    atcfuel:         string;
    atcfuel_units:   string;
    wxxfuel:         string;
    wxxfuel_units:   string;
    addedfuel:       string;
    addedfuel_units: string;
    addedfuel_label: string;
    tankering:       string;
    tankering_units: string;
    flightrules:     string;
    flighttype:      string;
    contpct:         string;
    resvrule:        string;
    taxiout:         string;
    taxiin:          string;
    cargo:           string;
    origrwy:         string;
    destrwy:         string;
    climb:           string;
    descent:         string;
    cruisemode:      string;
    cruisesub:       string;
    planformat:      string;
    pounds:          string;
    navlog:          string;
    etops:           string;
    stepclimbs:      string;
    tlr:             string;
    notams_opt:      string;
    firnot:          string;
    maps:            string;
    turntoflt:       EnrouteAltn;
    turntoapt:       EnrouteAltn;
    turntotime:      EnrouteAltn;
    turnfrflt:       EnrouteAltn;
    turnfrapt:       EnrouteAltn;
    turnfrtime:      EnrouteAltn;
    fuelstats:       EnrouteAltn;
    contlabel:       EnrouteAltn;
    static_id:       EnrouteAltn;
    acdata:          EnrouteAltn;
    acdata_parsed:   EnrouteAltn;
}

export type Atc = {
    flightplan_text:  string;
    route:            string;
    route_ifps:       string;
    callsign:         string;
    flight_type:      string;
    flight_rules:     FlightRules;
    initial_spd:      string;
    initial_spd_unit: string;
    initial_alt:      string;
    initial_alt_unit: FlightRules;
    section18:        string;
    fir_orig:         IataCode;
    fir_dest:         IataCode;
    fir_altn:         IataCode;
    fir_etops:        EnrouteAltn;
    fir_enroute:      EnrouteAltn;
}

export type Crew = {
    pilot_id: string;
    cpt:      string;
    fo:       string;
    dx:       string;
    pu:       Pu;
}

export type Pu = {
    "0": string;
}

export type DatabaseUpdates = {
    metar_taf: string;
    winds:     string;
    sigwx:     string;
    sigmet:    string;
    notams:    string;
    tracks:    string;
}

export type Destination = {
    icao_code:        IataCode;
    iata_code:        IataCode;
    faa_code:         EnrouteAltn;
    icao_region:      string;
    elevation:        string;
    pos_lat:          string;
    pos_long:         string;
    name:             Name;
    timezone:         string;
    plan_rwy:         string;
    trans_alt:        string;
    trans_level:      string;
    metar:            string;
    metar_time:       Date;
    metar_category:   string;
    metar_visibility: string;
    metar_ceiling:    string;
    taf:              string;
    taf_time:         Date;
    atis:             Ati[];
    notam:            DestinationNotam[];
}

export type DestinationNotam = {
    source_id:                FlightRules;
    account_id:               IataCode;
    notam_id:                 string;
    location_id:              IataCode;
    location_icao:            IataCode;
    location_name:            Name;
    location_type:            LocationType;
    date_created:             Date;
    date_effective:           Date;
    date_expire:              Date;
    date_expire_is_estimated: EnrouteAltn | string;
    date_modified:            Date;
    notam_schedule:           EnrouteAltn | string;
    notam_html:               string;
    notam_text:               string;
    notam_raw:                string;
    notam_nrc:                EnrouteAltn | NotamNrcEnum;
    notam_qcode:              EnrouteAltn | string;
    notam_qcode_category:     LocationType;
    notam_qcode_subject:      EnrouteAltn | string;
    notam_qcode_status:       EnrouteAltn | NotamQcodeStatusEnum;
    notam_is_obstacle:        EnrouteAltn;
}

export type Fetch = {
    userid:    string;
    static_id: EnrouteAltn;
    status:    string;
    time:      string;
}

export type Files = {
    directory: string;
    pdf:       Pdf;
    file:      Pdf[];
}

export type Pdf = {
    name: string;
    link: string;
}

export type FmsDownloads = {
    directory: string;
    pdf:       Pdf;
    abx:       Pdf;
    a3e:       Pdf;
    crx:       Pdf;
    cra:       Pdf;
    psx:       Pdf;
    efb:       Pdf;
    ef2:       Pdf;
    bbs:       Pdf;
    csf:       Pdf;
    ftr:       Pdf;
    gtn:       Pdf;
    vm5:       Pdf;
    vmx:       Pdf;
    ffa:       Pdf;
    fsc:       Pdf;
    fs9:       Pdf;
    mfs:       Pdf;
    mfn:       Pdf;
    m24:       Pdf;
    fsl:       Pdf;
    fsx:       Pdf;
    fsn:       Pdf;
    gfs:       Pdf;
    kml:       Pdf;
    ify:       Pdf;
    i74:       Pdf;
    ifa:       Pdf;
    ifw:       Pdf;
    inb:       Pdf;
    ina:       Pdf;
    ivo:       Pdf;
    xvd:       Pdf;
    xvp:       Pdf;
    ixg:       Pdf;
    jar:       Pdf;
    jhe:       Pdf;
    jfb:       Pdf;
    mdr:       Pdf;
    mda:       Pdf;
    lvd:       Pdf;
    mjc:       Pdf;
    mjq:       Pdf;
    atm:       Pdf;
    mvz:       Pdf;
    vms:       Pdf;
    pmo:       Pdf;
    pmr:       Pdf;
    pmw:       Pdf;
    pgt:       Pdf;
    mga:       Pdf;
    psm:       Pdf;
    qty:       Pdf;
    rmd:       Pdf;
    sbr:       Pdf;
    sfp:       Pdf;
    tdg:       Pdf;
    tfd:       Pdf;
    ufc:       Pdf;
    vas:       Pdf;
    vfp:       Pdf;
    wae:       Pdf;
    xfm:       Pdf;
    xpe:       Pdf;
    xpn:       Pdf;
    xp9:       Pdf;
    zbo:       Pdf;
}

export type Fuel = {
    taxi:           string;
    enroute_burn:   string;
    contingency:    string;
    alternate_burn: string;
    reserve:        string;
    etops:          string;
    extra:          string;
    extra_required: string;
    extra_optional: string;
    min_takeoff:    string;
    plan_takeoff:   string;
    plan_ramp:      string;
    plan_landing:   string;
    avg_fuel_flow:  string;
    max_tanks:      string;
}

export type FuelExtra = {
    bucket: Bucket[];
}

export type Bucket = {
    label:    string;
    fuel:     string;
    time:     string;
    required: EnrouteAltn | string;
}

export type General = {
    release:             string;
    icao_airline:        string;
    flight_number:       string;
    is_etops:            string;
    dx_rmk:              string;
    sys_rmk:             EnrouteAltn;
    is_detailed_profile: string;
    cruise_profile:      string;
    climb_profile:       string;
    descent_profile:     string;
    alternate_profile:   string;
    reserve_profile:     string;
    costindex:           string;
    cont_rule:           string;
    initial_altitude:    string;
    stepclimb_string:    string;
    avg_temp_dev:        string;
    avg_tropopause:      string;
    avg_wind_comp:       string;
    avg_wind_dir:        string;
    avg_wind_spd:        string;
    gc_distance:         string;
    route_distance:      string;
    air_distance:        string;
    total_burn:          string;
    cruise_tas:          string;
    cruise_mach:         string;
    passengers:          string;
    route:               string;
    route_ifps:          string;
    route_navigraph:     string;
    sid_ident:           EnrouteAltn;
    sid_trans:           EnrouteAltn;
    star_ident:          EnrouteAltn;
    star_trans:          EnrouteAltn;
}

export type Images = {
    directory: string;
    map:       Pdf[];
}

export type Impacts = {
    minus_6000ft:   Minus2000_Ft;
    minus_4000ft:   Minus2000_Ft;
    minus_2000ft:   Minus2000_Ft;
    plus_2000ft:    EnrouteAltn;
    plus_4000ft:    EnrouteAltn;
    plus_6000ft:    EnrouteAltn;
    higher_ci:      EnrouteAltn;
    lower_ci:       EnrouteAltn;
    zfw_plus_1000:  Minus2000_Ft;
    zfw_minus_1000: Minus2000_Ft;
}

export type Minus2000_Ft = {
    time_enroute:    string;
    time_difference: string;
    enroute_burn:    string;
    burn_difference: string;
    ramp_fuel:       string;
    initial_fl:      string;
    initial_tas:     string;
    initial_mach:    string;
    cost_index:      string;
}

export type Links = {
    skyvector: string;
}

export type Navlog = {
    fix: NavlogFix[];
}

export type NavlogFix = {
    ident:             string;
    name:              string;
    type:              string;
    icao_region:       EnrouteAltn | string;
    region_code:       EnrouteAltn;
    frequency:         EnrouteAltn | string;
    pos_lat:           string;
    pos_long:          string;
    stage:             string;
    via_airway:        string;
    is_sid_star:       string;
    distance:          string;
    track_true:        string;
    track_mag:         string;
    heading_true:      string;
    heading_mag:       string;
    altitude_feet:     string;
    ind_airspeed:      string;
    true_airspeed:     string;
    mach:              string;
    mach_thousandths:  string;
    wind_component:    string;
    groundspeed:       string;
    time_leg:          string;
    time_total:        string;
    fuel_flow:         string;
    fuel_leg:          string;
    fuel_totalused:    string;
    fuel_min_onboard:  string;
    fuel_plan_onboard: string;
    oat:               string;
    oat_isa_dev:       string;
    wind_dir:          string;
    wind_spd:          string;
    shear:             string;
    tropopause_feet:   string;
    ground_height:     string;
    fir:               IataCode;
    fir_units:         string;
    fir_valid_levels:  string;
    mora:              string;
    wind_data:         WindData;
    fir_crossing:      EnrouteAltn;
}

export type WindData = {
    level: Level[];
}

export type Level = {
    altitude: string;
    wind_dir: string;
    wind_spd: string;
    oat:      string;
}

export type Notams = {
    notamdrec:   Notamdrec[];
    "rec-count": string;
}

export type Notamdrec = {
    source_id:                   FlightRules;
    account_id:                  IataCode;
    notam_id:                    string;
    notam_part:                  string;
    cns_location_id:             IataCode;
    xoveraccountid?:             IataCode;
    xovernotamid?:               string;
    icao_id:                     IataCode;
    icao_name:                   Name;
    total_parts:                 string;
    notam_created_dtg:           string;
    notam_effective_dtg:         string;
    notam_expire_dtg?:           string;
    notam_lastmod_dtg:           string;
    notam_inserted_dtg:          string;
    notam_text:                  string;
    notam_report:                string;
    notam_nrc?:                  NotamNrcEnum;
    notam_qcode?:                string;
    notam_expire_dtg_estimated?: string;
}

export type Origin = {
    icao_code:        IataCode;
    iata_code:        string;
    faa_code:         EnrouteAltn;
    icao_region:      string;
    elevation:        string;
    pos_lat:          string;
    pos_long:         string;
    name:             Name;
    timezone:         string;
    plan_rwy:         string;
    trans_alt:        string;
    trans_level:      string;
    metar:            string;
    metar_time:       Date;
    metar_category:   string;
    metar_visibility: string;
    metar_ceiling:    string;
    taf:              string;
    taf_time:         Date;
    atis:             EnrouteAltn;
    notam:            OriginNotam[];
}

export type OriginNotam = {
    source_id:                FlightRules;
    account_id:               IataCode;
    notam_id:                 string;
    location_id:              IataCode;
    location_icao:            IataCode;
    location_name:            Name;
    location_type:            LocationType;
    date_created:             Date;
    date_effective:           Date;
    date_expire:              Date;
    date_expire_is_estimated: EnrouteAltn | string;
    date_modified:            Date;
    notam_schedule:           EnrouteAltn | string;
    notam_html:               string;
    notam_text:               string;
    notam_raw:                string;
    notam_nrc:                NotamNrcEnum;
    notam_qcode:              EnrouteAltn | string;
    notam_qcode_category:     LocationType;
    notam_qcode_subject:      EnrouteAltn | NotamQcodeSubjectEnum;
    notam_qcode_status:       EnrouteAltn | NotamQcodeStatusEnum;
    notam_is_obstacle:        EnrouteAltn;
}

export enum NotamQcodeSubjectEnum {
    Aerodrome = "Aerodrome",
    InstrumentApproachProcedure = "Instrument approach procedure",
    Runway = "Runway",
    Taxiway = "Taxiway",
}

export type Params = {
    request_id:     string;
    sequence_id:    string;
    static_id:      EnrouteAltn;
    user_id:        string;
    time_generated: string;
    xml_file:       string;
    ofp_layout:     string;
    airac:          string;
    units:          string;
}

export type Prefile = {
    vatsim:    Ivao;
    ivao:      Ivao;
    pilotedge: Pilotedge;
    poscon:    Pilotedge;
}

export type Ivao = {
    name: string;
    site: string;
    link: string;
    form: string;
}

export type Pilotedge = {
    name: string;
    site: string;
    link: string;
    form: EnrouteAltn;
}

export type Text = {
    nat_tracks:  EnrouteAltn;
    tlr_section: string;
    plan_html:   string;
}

export type Times = {
    est_time_enroute:   string;
    sched_time_enroute: string;
    sched_out:          string;
    sched_off:          string;
    sched_on:           string;
    sched_in:           string;
    sched_block:        string;
    est_out:            string;
    est_off:            string;
    est_on:             string;
    est_in:             string;
    est_block:          string;
    orig_timezone:      string;
    dest_timezone:      string;
    taxi_out:           string;
    taxi_in:            string;
    reserve_time:       string;
    endurance:          string;
    contfuel_time:      string;
    etopsfuel_time:     string;
    extrafuel_time:     string;
}

export type Tlr = {
    takeoff: Takeoff;
    landing: Landing;
}

export type Landing = {
    conditions:   Conditions;
    distance_dry: Distance;
    distance_wet: Distance;
    runway:       LandingRunway[];
}

export type Conditions = {
    airport_icao:      IataCode;
    planned_runway:    string;
    planned_weight:    string;
    flap_setting?:     string;
    wind_direction:    string;
    wind_speed:        string;
    temperature:       string;
    altimeter:         string;
    surface_condition: string;
}

export type Distance = {
    weight:            string;
    flap_setting:      string;
    brake_setting:     string;
    reverser_credit:   string;
    speeds_vref:       string;
    actual_distance:   string;
    factored_distance: string;
}

export type LandingRunway = {
    identifier:          string;
    length:              string;
    length_tora:         string;
    length_toda:         string;
    length_asda:         string;
    length_lda:          string;
    elevation:           string;
    gradient:            string;
    true_course:         string;
    magnetic_course:     string;
    headwind_component:  string;
    crosswind_component: string;
    ils_frequency:       EnrouteAltn | string;
    max_weight_dry:      string;
    max_weight_wet:      string;
}

export type Takeoff = {
    conditions: Conditions;
    runway:     TakeoffRunway[];
}

export type TakeoffRunway = {
    identifier:          string;
    length:              string;
    length_tora:         string;
    length_toda:         string;
    length_asda:         string;
    length_lda:          string;
    elevation:           string;
    gradient:            string;
    true_course:         string;
    magnetic_course:     string;
    headwind_component:  string;
    crosswind_component: string;
    ils_frequency:       EnrouteAltn | string;
    flap_setting:        string;
    thrust_setting:      string;
    bleed_setting:       string;
    anti_ice_setting:    string;
    flex_temperature:    EnrouteAltn;
    max_temperature:     string;
    max_weight:          string;
    limit_code:          string;
    limit_obstacle:      EnrouteAltn;
    speeds_v1:           string;
    speeds_vr:           string;
    speeds_v2:           string;
    speeds_v2_id:        string;
    speeds_other:        EnrouteAltn;
    speeds_other_id:     EnrouteAltn;
    distance_decide:     string;
    distance_reject:     string;
    distance_margin:     string;
    distance_continue:   string;
}

export type Weather = {
    orig_metar:   string;
    orig_taf:     string;
    dest_metar:   string;
    dest_taf:     string;
    altn_metar:   string;
    altn_taf:     string;
    toaltn_metar: EnrouteAltn;
    toaltn_taf:   EnrouteAltn;
    eualtn_metar: EnrouteAltn;
    eualtn_taf:   EnrouteAltn;
    etops_metar:  EnrouteAltn;
    etops_taf:    EnrouteAltn;
}

export type Weights = {
    oew:              string;
    pax_count:        string;
    bag_count:        string;
    pax_count_actual: string;
    bag_count_actual: string;
    pax_weight:       string;
    bag_weight:       string;
    freight_added:    string;
    cargo:            string;
    payload:          string;
    est_zfw:          string;
    max_zfw:          string;
    est_tow:          string;
    max_tow:          string;
    max_tow_struct:   string;
    tow_limit_code:   string;
    est_ldw:          string;
    max_ldw:          string;
    est_ramp:         string;
}