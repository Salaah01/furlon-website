--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5 (Ubuntu 11.5-3.pgdg18.04+1)
-- Dumped by pg_dump version 13.2

-- Started on 2021-05-30 20:22:58

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 9 (class 3079 OID 17135)
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
-- TOC entry 4476 (class 0 OID 0)
-- Dependencies: 9
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
-- TOC entry 5 (class 3079 OID 17676)
-- Name: btree_gist; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;


--
-- TOC entry 4477 (class 0 OID 0)
-- Dependencies: 5
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';


--
-- TOC entry 16 (class 3079 OID 16661)
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- TOC entry 4478 (class 0 OID 0)
-- Dependencies: 16
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- TOC entry 7 (class 3079 OID 17573)
-- Name: cube; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
-- TOC entry 4479 (class 0 OID 0)
-- Dependencies: 7
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
-- TOC entry 22 (class 3079 OID 16384)
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
-- TOC entry 4480 (class 0 OID 0)
-- Dependencies: 22
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


--
-- TOC entry 10 (class 3079 OID 17130)
-- Name: dict_int; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;


--
-- TOC entry 4481 (class 0 OID 0)
-- Dependencies: 10
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';


--
-- TOC entry 4 (class 3079 OID 18299)
-- Name: dict_xsyn; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;


--
-- TOC entry 4482 (class 0 OID 0)
-- Dependencies: 4
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';


--
-- TOC entry 6 (class 3079 OID 17660)
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
-- TOC entry 4483 (class 0 OID 0)
-- Dependencies: 6
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


--
-- TOC entry 17 (class 3079 OID 16650)
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- TOC entry 4484 (class 0 OID 0)
-- Dependencies: 17
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- TOC entry 11 (class 3079 OID 17007)
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
-- TOC entry 4485 (class 0 OID 0)
-- Dependencies: 11
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
-- TOC entry 12 (class 3079 OID 16889)
-- Name: intarray; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;


--
-- TOC entry 4486 (class 0 OID 0)
-- Dependencies: 12
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';


--
-- TOC entry 20 (class 3079 OID 16444)
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
-- TOC entry 4487 (class 0 OID 0)
-- Dependencies: 20
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';


--
-- TOC entry 2 (class 3079 OID 18311)
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- TOC entry 4488 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_stat_statements IS 'track execution statistics of all SQL statements executed';


--
-- TOC entry 13 (class 3079 OID 16812)
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- TOC entry 4489 (class 0 OID 0)
-- Dependencies: 13
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- TOC entry 14 (class 3079 OID 16775)
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- TOC entry 4490 (class 0 OID 0)
-- Dependencies: 14
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- TOC entry 8 (class 3079 OID 17571)
-- Name: pgrowlocks; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;


--
-- TOC entry 4491 (class 0 OID 0)
-- Dependencies: 8
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';


--
-- TOC entry 19 (class 3079 OID 16619)
-- Name: pgstattuple; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;


--
-- TOC entry 4492 (class 0 OID 0)
-- Dependencies: 19
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';


--
-- TOC entry 18 (class 3079 OID 16629)
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
-- TOC entry 4493 (class 0 OID 0)
-- Dependencies: 18
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


--
-- TOC entry 3 (class 3079 OID 18304)
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- TOC entry 4494 (class 0 OID 0)
-- Dependencies: 3
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
-- TOC entry 15 (class 3079 OID 16764)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 4495 (class 0 OID 0)
-- Dependencies: 15
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- TOC entry 21 (class 3079 OID 16430)
-- Name: xml2; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;


--
-- TOC entry 4496 (class 0 OID 0)
-- Dependencies: 21
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';


--
-- TOC entry 222 (class 1259 OID 712767)
-- Name: accounts_customerdetails; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.accounts_customerdetails (
    id integer NOT NULL,
    address_line_1 character varying(128) NOT NULL,
    address_line_2 character varying(128) NOT NULL,
    postcode character varying(10) NOT NULL,
    telephone character varying(20) NOT NULL,
    status character varying(20) NOT NULL,
    verified boolean NOT NULL,
    opt_in boolean NOT NULL,
    city_id integer NOT NULL,
    country_id character varying(3) NOT NULL,
    user_id_id integer NOT NULL
);


--
-- TOC entry 223 (class 1259 OID 712770)
-- Name: accounts_customerdetails_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.accounts_customerdetails_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4497 (class 0 OID 0)
-- Dependencies: 223
-- Name: accounts_customerdetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.accounts_customerdetails_id_seq OWNED BY public.accounts_customerdetails.id;


--
-- TOC entry 224 (class 1259 OID 712772)
-- Name: accounts_storerights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.accounts_storerights (
    id integer NOT NULL,
    rights character varying(256) NOT NULL
);


--
-- TOC entry 225 (class 1259 OID 712775)
-- Name: accounts_storerights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.accounts_storerights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4498 (class 0 OID 0)
-- Dependencies: 225
-- Name: accounts_storerights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.accounts_storerights_id_seq OWNED BY public.accounts_storerights.id;


--
-- TOC entry 226 (class 1259 OID 712777)
-- Name: accounts_storeusers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.accounts_storeusers (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    status character varying(20) NOT NULL,
    rights_id integer NOT NULL,
    store_id_id bigint NOT NULL,
    user_id_id integer NOT NULL
);


--
-- TOC entry 227 (class 1259 OID 712780)
-- Name: accounts_storeusers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.accounts_storeusers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4499 (class 0 OID 0)
-- Dependencies: 227
-- Name: accounts_storeusers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.accounts_storeusers_id_seq OWNED BY public.accounts_storeusers.id;


--
-- TOC entry 228 (class 1259 OID 712782)
-- Name: auth_group; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


--
-- TOC entry 229 (class 1259 OID 712785)
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4500 (class 0 OID 0)
-- Dependencies: 229
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- TOC entry 230 (class 1259 OID 712787)
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


--
-- TOC entry 231 (class 1259 OID 712790)
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4501 (class 0 OID 0)
-- Dependencies: 231
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- TOC entry 232 (class 1259 OID 712792)
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


--
-- TOC entry 233 (class 1259 OID 712795)
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4502 (class 0 OID 0)
-- Dependencies: 233
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- TOC entry 234 (class 1259 OID 712797)
-- Name: auth_user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


--
-- TOC entry 235 (class 1259 OID 712803)
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


--
-- TOC entry 236 (class 1259 OID 712806)
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4503 (class 0 OID 0)
-- Dependencies: 236
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- TOC entry 237 (class 1259 OID 712808)
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4504 (class 0 OID 0)
-- Dependencies: 237
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- TOC entry 238 (class 1259 OID 712810)
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


--
-- TOC entry 239 (class 1259 OID 712813)
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4505 (class 0 OID 0)
-- Dependencies: 239
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- TOC entry 240 (class 1259 OID 712815)
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


--
-- TOC entry 241 (class 1259 OID 712822)
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4506 (class 0 OID 0)
-- Dependencies: 241
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- TOC entry 242 (class 1259 OID 712824)
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


--
-- TOC entry 243 (class 1259 OID 712827)
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4507 (class 0 OID 0)
-- Dependencies: 243
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- TOC entry 244 (class 1259 OID 712829)
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


--
-- TOC entry 245 (class 1259 OID 712835)
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4508 (class 0 OID 0)
-- Dependencies: 245
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- TOC entry 246 (class 1259 OID 712837)
-- Name: django_session; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


--
-- TOC entry 247 (class 1259 OID 712843)
-- Name: misc_cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.misc_cities (
    city_id integer NOT NULL,
    name character varying(128) NOT NULL,
    country_code_id character varying(3) NOT NULL
);


--
-- TOC entry 248 (class 1259 OID 712846)
-- Name: misc_cities_city_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.misc_cities_city_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4509 (class 0 OID 0)
-- Dependencies: 248
-- Name: misc_cities_city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.misc_cities_city_id_seq OWNED BY public.misc_cities.city_id;


--
-- TOC entry 249 (class 1259 OID 712848)
-- Name: misc_countries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.misc_countries (
    country_code character varying(3) NOT NULL,
    name character varying(50) NOT NULL
);


--
-- TOC entry 250 (class 1259 OID 712851)
-- Name: products_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_categories (
    cat_id integer NOT NULL,
    name character varying(128) NOT NULL
);


--
-- TOC entry 251 (class 1259 OID 712854)
-- Name: products_categories_cat_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_categories_cat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4510 (class 0 OID 0)
-- Dependencies: 251
-- Name: products_categories_cat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_categories_cat_id_seq OWNED BY public.products_categories.cat_id;


--
-- TOC entry 252 (class 1259 OID 712856)
-- Name: products_colourfamilies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_colourfamilies (
    name character varying(50) NOT NULL
);


--
-- TOC entry 253 (class 1259 OID 712859)
-- Name: products_colours; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_colours (
    id integer NOT NULL,
    col_families character varying(50) NOT NULL,
    name character varying(50) NOT NULL,
    hex_val character varying(7) NOT NULL
);


--
-- TOC entry 254 (class 1259 OID 712862)
-- Name: products_colours_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_colours_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4511 (class 0 OID 0)
-- Dependencies: 254
-- Name: products_colours_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_colours_id_seq OWNED BY public.products_colours.id;


--
-- TOC entry 255 (class 1259 OID 712864)
-- Name: products_features; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_features (
    feature_id integer NOT NULL,
    name character varying(50) NOT NULL,
    category_id integer
);


--
-- TOC entry 256 (class 1259 OID 712867)
-- Name: products_features_feature_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_features_feature_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4512 (class 0 OID 0)
-- Dependencies: 256
-- Name: products_features_feature_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_features_feature_id_seq OWNED BY public.products_features.feature_id;


--
-- TOC entry 257 (class 1259 OID 712869)
-- Name: products_linkedproducts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_linkedproducts (
    id bigint NOT NULL,
    product_id bigint NOT NULL,
    relation_id character varying(30) NOT NULL,
    related_product_id bigint NOT NULL
);


--
-- TOC entry 258 (class 1259 OID 712872)
-- Name: products_linkedproducts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_linkedproducts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4513 (class 0 OID 0)
-- Dependencies: 258
-- Name: products_linkedproducts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_linkedproducts_id_seq OWNED BY public.products_linkedproducts.id;


--
-- TOC entry 259 (class 1259 OID 712874)
-- Name: products_productfeatures; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_productfeatures (
    id bigint NOT NULL,
    feature_id integer NOT NULL,
    product_id bigint NOT NULL
);


--
-- TOC entry 260 (class 1259 OID 712877)
-- Name: products_productfeatures_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_productfeatures_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4514 (class 0 OID 0)
-- Dependencies: 260
-- Name: products_productfeatures_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_productfeatures_id_seq OWNED BY public.products_productfeatures.id;


--
-- TOC entry 261 (class 1259 OID 712879)
-- Name: products_productreviews; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_productreviews (
    id integer NOT NULL,
    rating double precision NOT NULL,
    comments character varying(2048),
    review_date timestamp with time zone NOT NULL,
    product_id bigint NOT NULL,
    store_id bigint NOT NULL,
    user_id integer NOT NULL,
    review_title character varying(50)
);


--
-- TOC entry 262 (class 1259 OID 712885)
-- Name: products_productreviews_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_productreviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4515 (class 0 OID 0)
-- Dependencies: 262
-- Name: products_productreviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_productreviews_id_seq OWNED BY public.products_productreviews.id;


--
-- TOC entry 263 (class 1259 OID 712887)
-- Name: products_products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_products (
    product_id bigint NOT NULL,
    name character varying(50) NOT NULL,
    main_colour boolean NOT NULL,
    sub_categories character varying(128) NOT NULL,
    height double precision,
    length double precision,
    width double precision,
    weight double precision,
    features character varying(100) NOT NULL,
    related character varying(100),
    showcase_image character varying(100) NOT NULL,
    image_1 character varying(100),
    image_2 character varying(100),
    image_3 character varying(100),
    image_4 character varying(100),
    image_5 character varying(100),
    image_6 character varying(100),
    description character varying(2048) NOT NULL,
    price double precision NOT NULL,
    rating double precision NOT NULL,
    ratings integer NOT NULL,
    upload_date timestamp with time zone,
    last_purchase_date timestamp with time zone,
    inventory integer NOT NULL,
    delivery_available boolean NOT NULL,
    delivery_price double precision NOT NULL,
    status character varying(10) NOT NULL,
    category_id integer NOT NULL,
    colour_id integer NOT NULL,
    room_id character varying(50) NOT NULL,
    store_id bigint NOT NULL,
    height_units character varying(10),
    length_units character varying(10),
    weight_units character varying(10),
    width_units character varying(10)
);


--
-- TOC entry 264 (class 1259 OID 712893)
-- Name: products_products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4516 (class 0 OID 0)
-- Dependencies: 264
-- Name: products_products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_products_product_id_seq OWNED BY public.products_products.product_id;


--
-- TOC entry 265 (class 1259 OID 712895)
-- Name: products_relationtype; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_relationtype (
    relation character varying(30) NOT NULL
);


--
-- TOC entry 266 (class 1259 OID 712898)
-- Name: products_rooms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_rooms (
    name character varying(50) NOT NULL
);


--
-- TOC entry 267 (class 1259 OID 712901)
-- Name: products_subcategories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products_subcategories (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    category_id integer
);


--
-- TOC entry 268 (class 1259 OID 712904)
-- Name: products_subcategories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_subcategories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4517 (class 0 OID 0)
-- Dependencies: 268
-- Name: products_subcategories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_subcategories_id_seq OWNED BY public.products_subcategories.id;


--
-- TOC entry 280 (class 1259 OID 827385)
-- Name: sales_deliveraddresses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sales_deliveraddresses (
    id bigint NOT NULL,
    status character varying(50) NOT NULL,
    last_used date,
    recipient character varying(100) NOT NULL,
    address_line_1 character varying(100) NOT NULL,
    address_line_2 character varying(100),
    postcode character varying(15),
    city_id integer NOT NULL,
    country_id character varying(3) NOT NULL,
    user_id integer NOT NULL
);


--
-- TOC entry 279 (class 1259 OID 827383)
-- Name: sales_deliveraddresses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sales_deliveraddresses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4518 (class 0 OID 0)
-- Dependencies: 279
-- Name: sales_deliveraddresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sales_deliveraddresses_id_seq OWNED BY public.sales_deliveraddresses.id;


--
-- TOC entry 269 (class 1259 OID 712906)
-- Name: sales_invoices; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sales_invoices (
    invoice_id bigint NOT NULL,
    "sale_IDs" character varying(500) NOT NULL,
    order_date timestamp with time zone NOT NULL,
    "user" character varying(100) NOT NULL,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    address_line_1 character varying(256) NOT NULL,
    address_line_2 character varying(256) NOT NULL,
    postcode character varying(10) NOT NULL,
    telephone character varying(20) NOT NULL,
    email character varying(254) NOT NULL,
    expected_delivery date NOT NULL,
    actual_delivery timestamp with time zone NOT NULL,
    delivered boolean NOT NULL,
    deliv_time_from time without time zone NOT NULL,
    deliv_time_to time without time zone NOT NULL,
    total_delivery double precision NOT NULL,
    total_assembly double precision NOT NULL,
    "tot_prods_exVat" double precision NOT NULL,
    vat double precision NOT NULL,
    grand_total double precision NOT NULL,
    city_id integer NOT NULL,
    country_id character varying(3) NOT NULL
);


--
-- TOC entry 270 (class 1259 OID 712912)
-- Name: sales_invoices_invoice_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sales_invoices_invoice_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4519 (class 0 OID 0)
-- Dependencies: 270
-- Name: sales_invoices_invoice_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sales_invoices_invoice_id_seq OWNED BY public.sales_invoices.invoice_id;


--
-- TOC entry 271 (class 1259 OID 712914)
-- Name: sales_sales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sales_sales (
    sale_id bigint NOT NULL,
    delivery_price double precision NOT NULL,
    assembly_price double precision NOT NULL,
    ex_vat double precision NOT NULL,
    vat double precision NOT NULL,
    total double precision NOT NULL,
    product_id bigint NOT NULL,
    store_id bigint NOT NULL,
    transaction_ref character varying(1000),
    address_line_1 character varying(100) NOT NULL,
    address_line_2 character varying(100),
    city_id integer NOT NULL,
    country_id character varying(3) NOT NULL,
    delivered_on timestamp with time zone,
    delivery_from timestamp with time zone,
    delivery_included boolean,
    delivery_to timestamp with time zone,
    ordered_on timestamp with time zone NOT NULL,
    payment_method character varying(20) NOT NULL,
    postcode character varying(15),
    quantity integer NOT NULL,
    recipient character varying(100) NOT NULL,
    return_by timestamp with time zone,
    returned_allowed boolean NOT NULL,
    returned_on timestamp with time zone,
    status character varying(50) NOT NULL,
    tracking_ref character varying(50),
    user_id integer NOT NULL
);


--
-- TOC entry 272 (class 1259 OID 712917)
-- Name: sales_sales_sale_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sales_sales_sale_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4520 (class 0 OID 0)
-- Dependencies: 272
-- Name: sales_sales_sale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sales_sales_sale_id_seq OWNED BY public.sales_sales.sale_id;


--
-- TOC entry 273 (class 1259 OID 712919)
-- Name: stores_deliveries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.stores_deliveries (
    id integer NOT NULL,
    label character varying(128) NOT NULL,
    min_dist character varying(8) NOT NULL,
    max_dist character varying(8) NOT NULL,
    min_total double precision NOT NULL,
    max_total double precision NOT NULL,
    price double precision NOT NULL,
    store_id bigint NOT NULL
);


--
-- TOC entry 274 (class 1259 OID 712922)
-- Name: stores_deliveries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.stores_deliveries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4521 (class 0 OID 0)
-- Dependencies: 274
-- Name: stores_deliveries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.stores_deliveries_id_seq OWNED BY public.stores_deliveries.id;


--
-- TOC entry 275 (class 1259 OID 712924)
-- Name: stores_storereviews; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.stores_storereviews (
    id integer NOT NULL,
    rating double precision NOT NULL,
    comments character varying(2048) NOT NULL,
    review_date timestamp with time zone NOT NULL,
    store_id bigint NOT NULL,
    user_id integer NOT NULL
);


--
-- TOC entry 276 (class 1259 OID 712930)
-- Name: stores_storereviews_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.stores_storereviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4522 (class 0 OID 0)
-- Dependencies: 276
-- Name: stores_storereviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.stores_storereviews_id_seq OWNED BY public.stores_storereviews.id;


--
-- TOC entry 277 (class 1259 OID 712932)
-- Name: stores_stores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.stores_stores (
    store_id bigint NOT NULL,
    name character varying(256) NOT NULL,
    address_line_1 character varying(256) NOT NULL,
    address_line_2 character varying(256) NOT NULL,
    postcode character varying(10) NOT NULL,
    telephone character varying(20) NOT NULL,
    email character varying(254) NOT NULL,
    website character varying(200) NOT NULL,
    rating double precision,
    ratings integer NOT NULL,
    longitude double precision NOT NULL,
    latitude double precision NOT NULL,
    max_delivery_distance character varying(64) NOT NULL,
    std_delivery_price double precision NOT NULL,
    description character varying(2048) NOT NULL,
    established date NOT NULL,
    join_date timestamp with time zone NOT NULL,
    last_activity timestamp with time zone NOT NULL,
    status character varying(16) NOT NULL,
    city_id integer NOT NULL,
    country_id character varying(3) NOT NULL
);


--
-- TOC entry 278 (class 1259 OID 712938)
-- Name: stores_stores_store_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.stores_stores_store_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4523 (class 0 OID 0)
-- Dependencies: 278
-- Name: stores_stores_store_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.stores_stores_store_id_seq OWNED BY public.stores_stores.store_id;


--
-- TOC entry 4064 (class 2604 OID 712940)
-- Name: accounts_customerdetails id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_customerdetails ALTER COLUMN id SET DEFAULT nextval('public.accounts_customerdetails_id_seq'::regclass);


--
-- TOC entry 4065 (class 2604 OID 712941)
-- Name: accounts_storerights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_storerights ALTER COLUMN id SET DEFAULT nextval('public.accounts_storerights_id_seq'::regclass);


--
-- TOC entry 4066 (class 2604 OID 712942)
-- Name: accounts_storeusers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_storeusers ALTER COLUMN id SET DEFAULT nextval('public.accounts_storeusers_id_seq'::regclass);


--
-- TOC entry 4067 (class 2604 OID 712943)
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- TOC entry 4068 (class 2604 OID 712944)
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- TOC entry 4069 (class 2604 OID 712945)
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- TOC entry 4070 (class 2604 OID 712946)
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- TOC entry 4071 (class 2604 OID 712947)
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- TOC entry 4072 (class 2604 OID 712948)
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- TOC entry 4073 (class 2604 OID 712949)
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- TOC entry 4075 (class 2604 OID 712950)
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- TOC entry 4076 (class 2604 OID 712951)
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- TOC entry 4077 (class 2604 OID 712952)
-- Name: misc_cities city_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.misc_cities ALTER COLUMN city_id SET DEFAULT nextval('public.misc_cities_city_id_seq'::regclass);


--
-- TOC entry 4078 (class 2604 OID 712953)
-- Name: products_categories cat_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_categories ALTER COLUMN cat_id SET DEFAULT nextval('public.products_categories_cat_id_seq'::regclass);


--
-- TOC entry 4079 (class 2604 OID 712954)
-- Name: products_colours id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_colours ALTER COLUMN id SET DEFAULT nextval('public.products_colours_id_seq'::regclass);


--
-- TOC entry 4080 (class 2604 OID 712955)
-- Name: products_features feature_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_features ALTER COLUMN feature_id SET DEFAULT nextval('public.products_features_feature_id_seq'::regclass);


--
-- TOC entry 4081 (class 2604 OID 712956)
-- Name: products_linkedproducts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_linkedproducts ALTER COLUMN id SET DEFAULT nextval('public.products_linkedproducts_id_seq'::regclass);


--
-- TOC entry 4082 (class 2604 OID 712957)
-- Name: products_productfeatures id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productfeatures ALTER COLUMN id SET DEFAULT nextval('public.products_productfeatures_id_seq'::regclass);


--
-- TOC entry 4083 (class 2604 OID 712958)
-- Name: products_productreviews id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productreviews ALTER COLUMN id SET DEFAULT nextval('public.products_productreviews_id_seq'::regclass);


--
-- TOC entry 4084 (class 2604 OID 712959)
-- Name: products_products product_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_products ALTER COLUMN product_id SET DEFAULT nextval('public.products_products_product_id_seq'::regclass);


--
-- TOC entry 4085 (class 2604 OID 712960)
-- Name: products_subcategories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_subcategories ALTER COLUMN id SET DEFAULT nextval('public.products_subcategories_id_seq'::regclass);


--
-- TOC entry 4091 (class 2604 OID 827388)
-- Name: sales_deliveraddresses id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_deliveraddresses ALTER COLUMN id SET DEFAULT nextval('public.sales_deliveraddresses_id_seq'::regclass);


--
-- TOC entry 4086 (class 2604 OID 712961)
-- Name: sales_invoices invoice_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_invoices ALTER COLUMN invoice_id SET DEFAULT nextval('public.sales_invoices_invoice_id_seq'::regclass);


--
-- TOC entry 4087 (class 2604 OID 712962)
-- Name: sales_sales sale_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_sales ALTER COLUMN sale_id SET DEFAULT nextval('public.sales_sales_sale_id_seq'::regclass);


--
-- TOC entry 4088 (class 2604 OID 712963)
-- Name: stores_deliveries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_deliveries ALTER COLUMN id SET DEFAULT nextval('public.stores_deliveries_id_seq'::regclass);


--
-- TOC entry 4089 (class 2604 OID 712964)
-- Name: stores_storereviews id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_storereviews ALTER COLUMN id SET DEFAULT nextval('public.stores_storereviews_id_seq'::regclass);


--
-- TOC entry 4090 (class 2604 OID 712965)
-- Name: stores_stores store_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_stores ALTER COLUMN store_id SET DEFAULT nextval('public.stores_stores_store_id_seq'::regclass);


--
-- TOC entry 4412 (class 0 OID 712767)
-- Dependencies: 222
-- Data for Name: accounts_customerdetails; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4414 (class 0 OID 712772)
-- Dependencies: 224
-- Data for Name: accounts_storerights; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4416 (class 0 OID 712777)
-- Dependencies: 226
-- Data for Name: accounts_storeusers; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4418 (class 0 OID 712782)
-- Dependencies: 228
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4420 (class 0 OID 712787)
-- Dependencies: 230
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4422 (class 0 OID 712792)
-- Dependencies: 232
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (1, 'Can add sales', 1, 'add_sales');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (2, 'Can change sales', 1, 'change_sales');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (3, 'Can delete sales', 1, 'delete_sales');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (4, 'Can view sales', 1, 'view_sales');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (5, 'Can add invoices', 2, 'add_invoices');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (6, 'Can change invoices', 2, 'change_invoices');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (7, 'Can delete invoices', 2, 'delete_invoices');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (8, 'Can view invoices', 2, 'view_invoices');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (9, 'Can add stores', 3, 'add_stores');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (10, 'Can change stores', 3, 'change_stores');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (11, 'Can delete stores', 3, 'delete_stores');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (12, 'Can view stores', 3, 'view_stores');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (13, 'Can add store reviews', 4, 'add_storereviews');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (14, 'Can change store reviews', 4, 'change_storereviews');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (15, 'Can delete store reviews', 4, 'delete_storereviews');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (16, 'Can view store reviews', 4, 'view_storereviews');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (17, 'Can add deliveries', 5, 'add_deliveries');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (18, 'Can change deliveries', 5, 'change_deliveries');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (19, 'Can delete deliveries', 5, 'delete_deliveries');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (20, 'Can view deliveries', 5, 'view_deliveries');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (21, 'Can add store rights', 6, 'add_storerights');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (22, 'Can change store rights', 6, 'change_storerights');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (23, 'Can delete store rights', 6, 'delete_storerights');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (24, 'Can view store rights', 6, 'view_storerights');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (25, 'Can add store users', 7, 'add_storeusers');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (26, 'Can change store users', 7, 'change_storeusers');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (27, 'Can delete store users', 7, 'delete_storeusers');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (28, 'Can view store users', 7, 'view_storeusers');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (29, 'Can add customer details', 8, 'add_customerdetails');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (30, 'Can change customer details', 8, 'change_customerdetails');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (31, 'Can delete customer details', 8, 'delete_customerdetails');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (32, 'Can view customer details', 8, 'view_customerdetails');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (33, 'Can add categories', 9, 'add_categories');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (34, 'Can change categories', 9, 'change_categories');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (35, 'Can delete categories', 9, 'delete_categories');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (36, 'Can view categories', 9, 'view_categories');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (37, 'Can add colour families', 10, 'add_colourfamilies');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (38, 'Can change colour families', 10, 'change_colourfamilies');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (39, 'Can delete colour families', 10, 'delete_colourfamilies');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (40, 'Can view colour families', 10, 'view_colourfamilies');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (41, 'Can add colours', 11, 'add_colours');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (42, 'Can change colours', 11, 'change_colours');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (43, 'Can delete colours', 11, 'delete_colours');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (44, 'Can view colours', 11, 'view_colours');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (45, 'Can add products', 12, 'add_products');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (46, 'Can change products', 12, 'change_products');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (47, 'Can delete products', 12, 'delete_products');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (48, 'Can view products', 12, 'view_products');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (49, 'Can add rooms', 13, 'add_rooms');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (50, 'Can change rooms', 13, 'change_rooms');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (51, 'Can delete rooms', 13, 'delete_rooms');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (52, 'Can view rooms', 13, 'view_rooms');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (53, 'Can add sub categories', 14, 'add_subcategories');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (54, 'Can change sub categories', 14, 'change_subcategories');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (55, 'Can delete sub categories', 14, 'delete_subcategories');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (56, 'Can view sub categories', 14, 'view_subcategories');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (57, 'Can add related product vars', 15, 'add_relatedproductvars');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (58, 'Can change related product vars', 15, 'change_relatedproductvars');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (59, 'Can delete related product vars', 15, 'delete_relatedproductvars');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (60, 'Can view related product vars', 15, 'view_relatedproductvars');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (61, 'Can add product reviews', 16, 'add_productreviews');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (62, 'Can change product reviews', 16, 'change_productreviews');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (63, 'Can delete product reviews', 16, 'delete_productreviews');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (64, 'Can view product reviews', 16, 'view_productreviews');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (65, 'Can add product colour vars', 17, 'add_productcolourvars');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (66, 'Can change product colour vars', 17, 'change_productcolourvars');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (67, 'Can delete product colour vars', 17, 'delete_productcolourvars');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (68, 'Can view product colour vars', 17, 'view_productcolourvars');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (69, 'Can add features', 18, 'add_features');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (70, 'Can change features', 18, 'change_features');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (71, 'Can delete features', 18, 'delete_features');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (72, 'Can view features', 18, 'view_features');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (73, 'Can add countries', 19, 'add_countries');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (74, 'Can change countries', 19, 'change_countries');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (75, 'Can delete countries', 19, 'delete_countries');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (76, 'Can view countries', 19, 'view_countries');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (77, 'Can add cities', 20, 'add_cities');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (78, 'Can change cities', 20, 'change_cities');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (79, 'Can delete cities', 20, 'delete_cities');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (80, 'Can view cities', 20, 'view_cities');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (81, 'Can add log entry', 21, 'add_logentry');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (82, 'Can change log entry', 21, 'change_logentry');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (83, 'Can delete log entry', 21, 'delete_logentry');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (84, 'Can view log entry', 21, 'view_logentry');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (85, 'Can add permission', 22, 'add_permission');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (86, 'Can change permission', 22, 'change_permission');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (87, 'Can delete permission', 22, 'delete_permission');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (88, 'Can view permission', 22, 'view_permission');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (89, 'Can add group', 23, 'add_group');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (90, 'Can change group', 23, 'change_group');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (91, 'Can delete group', 23, 'delete_group');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (92, 'Can view group', 23, 'view_group');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (93, 'Can add user', 24, 'add_user');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (94, 'Can change user', 24, 'change_user');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (95, 'Can delete user', 24, 'delete_user');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (96, 'Can view user', 24, 'view_user');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (97, 'Can add content type', 25, 'add_contenttype');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (98, 'Can change content type', 25, 'change_contenttype');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (99, 'Can delete content type', 25, 'delete_contenttype');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (100, 'Can view content type', 25, 'view_contenttype');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (101, 'Can add session', 26, 'add_session');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (102, 'Can change session', 26, 'change_session');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (103, 'Can delete session', 26, 'delete_session');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (104, 'Can view session', 26, 'view_session');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (105, 'Can add linked products', 27, 'add_linkedproducts');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (106, 'Can change linked products', 27, 'change_linkedproducts');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (107, 'Can delete linked products', 27, 'delete_linkedproducts');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (108, 'Can view linked products', 27, 'view_linkedproducts');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (109, 'Can add relation type', 28, 'add_relationtype');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (110, 'Can change relation type', 28, 'change_relationtype');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (111, 'Can delete relation type', 28, 'delete_relationtype');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (112, 'Can view relation type', 28, 'view_relationtype');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (113, 'Can add product features', 29, 'add_productfeatures');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (114, 'Can change product features', 29, 'change_productfeatures');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (115, 'Can delete product features', 29, 'delete_productfeatures');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (116, 'Can view product features', 29, 'view_productfeatures');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (117, 'Can add deliver addresses', 30, 'add_deliveraddresses');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (118, 'Can change deliver addresses', 30, 'change_deliveraddresses');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (119, 'Can delete deliver addresses', 30, 'delete_deliveraddresses');
INSERT INTO public.auth_permission (id, name, content_type_id, codename) VALUES (120, 'Can view deliver addresses', 30, 'view_deliveraddresses');


--
-- TOC entry 4424 (class 0 OID 712797)
-- Dependencies: 234
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (2, 'pbkdf2_sha256$150000$wCE1COvlzKNZ$U7C7E4vrEYxajty0vp6ezyIkrthWTSTIQBcUqFTZaIQ=', NULL, false, 'salaah_amin@hotmail.co.uk', 'Test', '1', 'salaah_amin@hotmail.co.uk', false, true, '2020-01-13 19:29:04.788932+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (4, 'pbkdf2_sha256$150000$3e3g9M91yR6R$HHlvK4C1Mhbw+YgziIM3EfyjcI0xLrj3kuGHlLmUjAI=', NULL, false, 'g@gmail.com', 'Salaah', 'Amin', 'g@gmail.com', false, true, '2020-01-13 19:30:20.75138+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (12, 'pbkdf2_sha256$150000$Euwst8AztpmU$FbHaOE5yLNZbaBjpIosoAQ4FO9dm3Hm93Ir12PVnKm8=', '2020-08-26 01:55:14.19555+00', false, 'gazicliit@sakhpubo.ru', 'GazizacitOR', 'GazizacitOR', 'gazicliit@sakhpubo.ru', false, true, '2020-08-26 01:55:13.348311+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (22, 'pbkdf2_sha256$150000$QSY9RAsN7Z3v$M32tG4Hytz8aYpSG7jCAT8UGs/Ebsd6KADNokhqrlr8=', NULL, false, 'crowovtopsay@mail.ru', '2GNRBFQ: www.ihot1.ga#', '2GNRBFQ: www.ihot1.ga#', 'crowovtopsay@mail.ru', false, true, '2021-05-02 15:21:07.08905+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (13, 'pbkdf2_sha256$150000$lyALMhh24aL7$9Z03bvfd1XlqVb7oLxfwiVTr3nbMZvg2UzKkfGUJsL8=', '2020-08-31 01:56:25.222608+00', false, 'gazizaru@sakhpubo.ru', 'GazizacitOR', 'GazizacitOR', 'gazizaru@sakhpubo.ru', false, true, '2020-08-31 01:56:24.293868+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (14, 'pbkdf2_sha256$150000$hn8jf8vtWQZ2$Q17K2cQiU6BsrsreNTV0vwQ3M+tygC6jeKBQcRpuWkg=', '2020-09-10 00:03:33.636711+00', false, 'garifas@sakhpubo.ru', 'Aclerick', 'Aclerick', 'garifas@sakhpubo.ru', false, true, '2020-09-10 00:03:32.754094+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (7, 'pbkdf2_sha256$150000$xFERZ112Kq9m$qkWW+RC/gA+cE2axehOz5UK4LtHATSZkKhserfcoOlU=', '2020-02-03 07:53:14.854392+00', true, 'Salaah01', 'Salaah', 'Amin', '', true, true, '2020-01-31 21:35:03+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (23, 'pbkdf2_sha256$150000$BGhkZPtbTsk2$Qw73aD62giCWa/TFW+NHWD6/K+Iijf+WVhJX51CYrKA=', NULL, false, 'vingtitaphi1994@mail.ru', 'KR4QR78C6N6: www.ihot1.ga#', 'KR4QR78C6N6: www.ihot1.ga#', 'vingtitaphi1994@mail.ru', false, true, '2021-05-03 19:18:21.031623+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (15, 'pbkdf2_sha256$150000$L4M7MnZYLdBg$0oO3DDifkrBA1j1MTk8z2x3rGR8KFtzBTR/8K0PW2n0=', '2020-09-10 23:11:51.54027+00', false, 'gasinas@sakhpubo.ru', 'Gradalrick', 'Gradalrick', 'gasinas@sakhpubo.ru', false, true, '2020-09-10 23:11:50.691798+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (8, 'pbkdf2_sha256$150000$xXUJxyCHH8md$qVCwXtJOw4StDrZUohKyigigATkFPgLZFN0Xc1rv+aY=', '2020-02-08 22:36:33.744134+00', false, 'shaikhul2@aol.com', 'Shaikhul', 'Goldsworth', 'shaikhul2@aol.com', false, true, '2020-02-08 22:35:13.721398+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (16, 'pbkdf2_sha256$150000$1b0QOdCAVMO2$xY2/p2ASr5I0p8mlz5OWs4EbnXyACGgK8NBE3S4YEAw=', NULL, false, 'tuesdaymax@yandex.ru', '153HLF6 www.yandex.ru', '153HLF6 www.yandex.ru', 'tuesdaymax@yandex.ru', false, true, '2021-01-15 06:26:11.50381+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (17, 'pbkdf2_sha256$150000$5pdG6UaUZp7b$/CLCO6vd4V0Dz/1IobGf1/ZXEzZL1UNQRj1oQG7F558=', '2021-02-17 11:28:14.329974+00', false, 'sira@sakhpubo.ru', 'Rarlverrick', 'Rarlverrick', 'sira@sakhpubo.ru', false, true, '2021-02-17 11:28:13.363893+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (5, 'pbkdf2_sha256$150000$sDH704hjLQHy$H/hxj/AIZhTH0wB9Y78Y/2FhQNUP9+HMgkrqA6uqdPE=', '2020-02-10 21:40:12.940974+00', false, 'test2@gmail.com', 'Salaah', 'Amin', 'test2@gmail.com', false, true, '2020-01-13 20:53:32.66133+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (6, 'pbkdf2_sha256$150000$R6cp1eJEixG1$zEbSrVCR24Q/1G6F/To/feyxjHLC5FaaFKeGp5HQ6k8=', '2020-02-17 21:44:30.232081+00', false, 'test1@gmail.com', 'test1', '1', 'test1@gmail.com', false, true, '2020-01-18 16:44:42.680129+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (1, 'pbkdf2_sha256$150000$H7pNOMfszfrU$GiG0J/XTWfjpDbFx0Le6dBgehWymebGkwBZZtKzy3SE=', '2020-04-03 10:43:09.613014+00', true, 'salaah', '', '', '', true, true, '2019-12-26 20:35:48.072033+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (9, 'pbkdf2_sha256$150000$rK1iZuQc7rmJ$osOtzuPDKuPycrkv2fYIj9O53fwB2UxQVULv4GUJ4+s=', NULL, false, 'Murzich5817@thefmail.com', 'Krasnowekov57', 'Krasnowekov57', 'Murzich5817@thefmail.com', false, true, '2020-06-01 12:12:10.55414+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (18, 'pbkdf2_sha256$150000$QIZ2jUcnRJFZ$SUZkuffbUeNnkdJgiZ/7UU2OfomNuwTHc7AtZhF66BQ=', '2021-03-08 18:46:18.350012+00', false, 'shakatilar@sakhpubo.ru', 'Causpoofrick', 'Causpoofrick', 'shakatilar@sakhpubo.ru', false, true, '2021-03-08 18:46:17.510095+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (11, 'pbkdf2_sha256$150000$Fq8zMgGOwIqR$13yF6FqhHkFX6MbrrSPbxr+R/yzwOeomgyGN9c7nicQ=', '2020-07-08 07:14:03.364872+00', false, 'davidSwill@advairdiskus-247buy.com', 'MawikNusVI', 'MawikNusVI', 'davidSwill@advairdiskus-247buy.com', false, true, '2020-07-08 07:14:02.506445+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (19, 'pbkdf2_sha256$150000$glatReJluR18$gtPIy3QL/Nm2D/yFYvDj1GdV3ioaFNli/ljulrISGlU=', '2021-03-13 22:05:20.018016+00', false, 'aleksandra.626@mail.com', 'AlfonsogadayNU', 'AlfonsogadayNU', 'aleksandra.626@mail.com', false, true, '2021-03-13 22:05:19.576084+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (10, 'pbkdf2_sha256$150000$jLovK1n8pNxp$b4yTr8oHR7CAdU6PCOOvgGT3cVxVDTN4ZRgd8XtL2mE=', '2020-07-10 08:10:27.526207+00', false, 'martastuartma@yandex.com', 'AndroidekepCZ', 'AndroidekepCZ', 'martastuartma@yandex.com', false, true, '2020-07-06 13:09:29.805344+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (20, 'pbkdf2_sha256$150000$7AQhlQhhIeCQ$zyYflsEByZ6gsYpn4m0b6i88RLmkNxm/pgpp9sztiss=', NULL, false, 'mosortaile@mail.ru', 'S683CJ6A: www.usd9.ga#', 'S683CJ6A: www.usd9.ga#', 'mosortaile@mail.ru', false, true, '2021-04-18 22:38:21.123336+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (21, 'pbkdf2_sha256$150000$vDN4r3VBlqJq$Cnr+cQOJqej7Pj7Oj7o/FV2jTKX8QYoz/3izz9wFwTg=', NULL, false, 'ocvinrebi6@mail.ru', 'I1UH7ZSSHP5J: www.ihot1.ga#', 'I1UH7ZSSHP5J: www.ihot1.ga#', 'ocvinrebi6@mail.ru', false, true, '2021-04-28 16:45:05.095726+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (24, 'pbkdf2_sha256$150000$DnQmQXFftFM4$UGzlfF/UZocmuFsd+sI3YoSKVJfLxQsTmd/RxWqyuN8=', '2021-05-08 12:31:40.857737+00', false, 'inga.konstantinova@salesperson.net', 'SalenaimpupTN', 'SalenaimpupTN', 'inga.konstantinova@salesperson.net', false, true, '2021-05-05 19:05:02.041428+00');
INSERT INTO public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) VALUES (25, 'pbkdf2_sha256$150000$OWC2x5aZkq6o$nVHgcRni0AgH44c4vTySKy/ka1AC/AczkCe/uwvPP5A=', NULL, false, 'liniconssen@mail.ru', '84U1MUQOUB www.usd9.ga#', '84U1MUQOUB www.usd9.ga#', 'liniconssen@mail.ru', false, true, '2021-05-23 19:02:48.851288+00');


--
-- TOC entry 4425 (class 0 OID 712803)
-- Dependencies: 235
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4428 (class 0 OID 712810)
-- Dependencies: 238
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4430 (class 0 OID 712815)
-- Dependencies: 240
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (1, '2019-12-26 20:36:35.483253+00', 'colour', 'colour', 1, '[{"added": {}}]', 28, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (2, '2019-12-26 20:36:41.453389+00', 'similar', 'similar', 1, '[{"added": {}}]', 28, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (3, '2019-12-26 20:36:52.301341+00', 'set', 'set', 1, '[{"added": {}}]', 28, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (4, '2019-12-26 20:40:28.310289+00', '4', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (5, '2019-12-26 20:40:28.530434+00', '5', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (6, '2019-12-26 20:40:36.889347+00', '6', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (7, '2019-12-26 20:40:48.722256+00', '4', 'Bed 3 Col 1', 3, '', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (8, '2019-12-27 00:41:39.902482+00', '7', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (9, '2019-12-27 00:41:49.698443+00', '8', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (10, '2019-12-29 17:55:49.64313+00', '11', 'Bed 3 Col 1 144.0', 2, '[{"changed": {"fields": ["height_units", "length_units", "width_units", "weight_units"]}}]', 12, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (11, '2019-12-29 18:09:50.91891+00', '1', 'Bed 3 Col 1, Wooden Frame', 1, '[{"added": {}}]', 29, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (12, '2019-12-29 18:09:57.77626+00', '2', 'Bed 3 Col 1, Ottoman Storage', 1, '[{"added": {}}]', 29, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (13, '2020-01-18 19:51:07.964171+00', '9', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (14, '2020-01-18 19:51:13.696966+00', '10', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (15, '2020-01-18 19:51:17.484663+00', '11', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (16, '2020-01-18 19:51:33.322544+00', '12', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (17, '2020-01-18 19:51:44.627452+00', '12', 'Bed 3 Col 1', 2, '[{"changed": {"fields": ["related_product", "relation"]}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (18, '2020-01-18 19:51:50.315218+00', '13', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (19, '2020-01-18 19:51:54.673103+00', '14', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (20, '2020-01-18 19:52:00.793155+00', '15', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (21, '2020-01-18 19:52:06.620727+00', '16', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (22, '2020-01-18 19:52:12.612695+00', '17', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (23, '2020-01-18 19:52:17.626013+00', '18', 'Bed 3 Col 1', 1, '[{"added": {}}]', 27, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (24, '2020-01-31 21:35:39.042848+00', '7', 'Salaah01', 2, '[{"changed": {"fields": ["first_name", "last_name"]}}]', 24, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (25, '2020-01-31 21:37:23.511496+00', '1', 'ProductReviews object (1)', 1, '[{"added": {}}]', 16, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (26, '2020-01-31 21:38:11.841835+00', '2', 'ProductReviews object (2)', 1, '[{"added": {}}]', 16, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (27, '2020-01-31 22:34:46.756849+00', '3', 'ProductReviews object (3)', 1, '[{"added": {}}]', 16, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (28, '2020-02-02 00:10:55.970046+00', '4', 'ProductReviews object (4)', 1, '[{"added": {}}]', 16, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (29, '2020-02-02 00:11:30.844823+00', '3', 'ProductReviews object (3)', 3, '', 16, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (30, '2020-02-02 00:38:10.494612+00', '4', 'ProductReviews object (4)', 2, '[{"changed": {"fields": ["review_title", "comments"]}}]', 16, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (31, '2020-02-02 00:38:18.010604+00', '2', 'ProductReviews object (2)', 2, '[]', 16, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (32, '2020-02-02 00:38:38.496648+00', '1', 'ProductReviews object (1)', 2, '[{"changed": {"fields": ["review_title", "comments"]}}]', 16, 7);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (33, '2020-02-08 22:39:02.783846+00', '1', '1-test1', 1, '[{"added": {}}]', 1, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (34, '2020-02-08 22:59:28.476856+00', '2', '2-test23012020214600', 1, '[{"added": {}}]', 1, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (35, '2020-02-08 23:18:46.638929+00', '3', '3-test3', 1, '[{"added": {}}]', 1, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (36, '2020-02-10 10:40:06.64501+00', '8', 'ProductReviews object (8)', 2, '[{"changed": {"fields": ["rating", "review_title", "comments"]}}]', 16, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (37, '2020-02-10 11:41:13.977795+00', '8', 'ProductReviews object (8)', 2, '[{"changed": {"fields": ["comments"]}}]', 16, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (38, '2020-02-10 11:42:07.550053+00', '9', 'ProductReviews object (9)', 2, '[{"changed": {"fields": ["rating", "review_title", "comments"]}}]', 16, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (39, '2020-02-10 11:42:18.809127+00', '7', 'ProductReviews object (7)', 3, '', 16, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (40, '2020-02-10 11:42:23.772353+00', '6', 'ProductReviews object (6)', 3, '', 16, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (41, '2020-02-10 11:42:27.749351+00', '4', 'ProductReviews object (4)', 2, '[]', 16, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (42, '2020-02-10 11:42:32.635115+00', '2', 'ProductReviews object (2)', 2, '[]', 16, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (43, '2020-02-10 11:42:36.697312+00', '1', 'ProductReviews object (1)', 2, '[]', 16, 1);
INSERT INTO public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) VALUES (44, '2020-04-03 10:55:10.486999+00', '113', 'Bed 1 310.0', 2, '[{"changed": {"fields": ["image_1", "image_2", "image_3", "image_4", "image_5", "image_6"]}}]', 12, 1);


--
-- TOC entry 4432 (class 0 OID 712824)
-- Dependencies: 242
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.django_content_type (id, app_label, model) VALUES (1, 'sales', 'sales');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (2, 'sales', 'invoices');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (3, 'stores', 'stores');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (4, 'stores', 'storereviews');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (5, 'stores', 'deliveries');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (6, 'accounts', 'storerights');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (7, 'accounts', 'storeusers');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (8, 'accounts', 'customerdetails');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (9, 'products', 'categories');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (10, 'products', 'colourfamilies');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (11, 'products', 'colours');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (12, 'products', 'products');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (13, 'products', 'rooms');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (14, 'products', 'subcategories');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (15, 'products', 'relatedproductvars');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (16, 'products', 'productreviews');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (17, 'products', 'productcolourvars');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (18, 'products', 'features');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (19, 'misc', 'countries');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (20, 'misc', 'cities');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (21, 'admin', 'logentry');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (22, 'auth', 'permission');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (23, 'auth', 'group');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (24, 'auth', 'user');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (25, 'contenttypes', 'contenttype');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (26, 'sessions', 'session');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (27, 'products', 'linkedproducts');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (28, 'products', 'relationtype');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (29, 'products', 'productfeatures');
INSERT INTO public.django_content_type (id, app_label, model) VALUES (30, 'sales', 'deliveraddresses');


--
-- TOC entry 4434 (class 0 OID 712829)
-- Dependencies: 244
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.django_migrations (id, app, name, applied) VALUES (1, 'misc', '0001_initial', '2019-12-24 20:00:55.892362+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (2, 'contenttypes', '0001_initial', '2019-12-24 20:00:56.056599+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (3, 'auth', '0001_initial', '2019-12-24 20:00:56.337784+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (4, 'stores', '0001_initial', '2019-12-24 20:00:57.017595+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (5, 'accounts', '0001_initial', '2019-12-24 20:00:57.441192+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (6, 'admin', '0001_initial', '2019-12-24 20:00:57.673396+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (7, 'admin', '0002_logentry_remove_auto_add', '2019-12-24 20:00:57.860701+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (8, 'admin', '0003_logentry_add_action_flag_choices', '2019-12-24 20:00:57.873708+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (9, 'contenttypes', '0002_remove_content_type_name', '2019-12-24 20:00:57.90273+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (10, 'auth', '0002_alter_permission_name_max_length', '2019-12-24 20:00:57.909731+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (11, 'auth', '0003_alter_user_email_max_length', '2019-12-24 20:00:57.924743+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (12, 'auth', '0004_alter_user_username_opts', '2019-12-24 20:00:57.950916+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (13, 'auth', '0005_alter_user_last_login_null', '2019-12-24 20:00:57.963926+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (14, 'auth', '0006_require_contenttypes_0002', '2019-12-24 20:00:57.966926+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (15, 'auth', '0007_alter_validators_add_error_messages', '2019-12-24 20:00:57.978934+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (16, 'auth', '0008_alter_user_username_max_length', '2019-12-24 20:00:58.024965+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (17, 'auth', '0009_alter_user_last_name_max_length', '2019-12-24 20:00:58.040976+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (18, 'auth', '0010_alter_group_name_max_length', '2019-12-24 20:00:58.051982+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (19, 'auth', '0011_update_proxy_permissions', '2019-12-24 20:00:58.068995+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (20, 'products', '0001_initial', '2019-12-24 20:00:59.029214+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (21, 'sales', '0001_initial', '2019-12-24 20:00:59.824986+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (22, 'sessions', '0001_initial', '2019-12-24 20:01:00.019832+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (23, 'products', '0002_auto_20191224_2201', '2019-12-24 22:01:14.19106+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (24, 'products', '0003_auto_20191224_2205', '2019-12-24 22:05:15.765455+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (25, 'products', '0004_auto_20191226_2022', '2019-12-26 20:22:12.374417+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (26, 'products', '0005_auto_20191226_2035', '2019-12-26 20:35:23.093478+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (27, 'products', '0006_remove_linkedproducts_store', '2019-12-26 20:38:26.117537+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (28, 'products', '0007_productfeatures', '2019-12-29 18:03:52.898671+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (29, 'products', '0008_auto_20191229_1807', '2019-12-29 18:09:30.183379+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (30, 'sales', '0002_auto_20200123_2122', '2020-01-31 21:58:54.675396+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (31, 'sales', '0003_auto_20200124_2251', '2020-01-31 21:58:55.37273+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (32, 'sales', '0004_auto_20200125_1222', '2020-01-31 21:58:55.772808+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (33, 'sales', '0005_auto_20200129_2224', '2020-01-31 21:58:56.00926+00');
INSERT INTO public.django_migrations (id, app, name, applied) VALUES (34, 'products', '0009_auto_20200202_0037', '2020-02-02 00:37:32.763727+00');


--
-- TOC entry 4436 (class 0 OID 712837)
-- Dependencies: 246
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('rsifapp2bh1ltb7oi8l2nmextlzsknbf', 'NzU1ZTdjNmU4YmRlNmYxMTQ1OTJkZDMxZjU0YjFmZWMxOTRkYTYxMDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkYmQyOGRlMzRhMDczOWMyYzNhZDk2YjVmOTA2YjhhMjFlOWY5ZDY2In0=', '2020-01-09 20:36:07.470028+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('rf754yvq03pm8330rqlxz76n3cuqv3ol', 'Mjc5ZWViMThkOGE3YWFkY2RiZjVmYTI3MzAyMzYwODVjNGZmMTM4Mjp7fQ==', '2020-01-27 21:37:01.201978+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('thqmpwjqnrp5i20pmmstyz9pjd1uky5t', 'Mjc5ZWViMThkOGE3YWFkY2RiZjVmYTI3MzAyMzYwODVjNGZmMTM4Mjp7fQ==', '2020-01-27 21:37:01.285032+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('xae1xvwcm4niakkqglv7mebefsb03evp', 'NzU1ZTdjNmU4YmRlNmYxMTQ1OTJkZDMxZjU0YjFmZWMxOTRkYTYxMDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkYmQyOGRlMzRhMDczOWMyYzNhZDk2YjVmOTA2YjhhMjFlOWY5ZDY2In0=', '2020-02-01 19:50:06.042122+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('8fe4p05k3nw7ekaakipza2u9nxom1f3s', 'NjFiYWVjNDk5YWE2YmMwMDY1Yzc4MDkwZWJhZTE0MDRjMjFkMTA4ZDp7Il9hdXRoX3VzZXJfaWQiOiI3IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJhYmRjZDExYjgwZDUwYjE3NDNkYTkyMDJkNTViMmJhNDAwZDk4MzZmIn0=', '2020-02-14 21:35:11.876267+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('12sklo0k01bcezr19gv9bv56ibhode2t', 'NjFiYWVjNDk5YWE2YmMwMDY1Yzc4MDkwZWJhZTE0MDRjMjFkMTA4ZDp7Il9hdXRoX3VzZXJfaWQiOiI3IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJhYmRjZDExYjgwZDUwYjE3NDNkYTkyMDJkNTViMmJhNDAwZDk4MzZmIn0=', '2020-02-17 07:53:14.916738+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('c5way77lbqie7o7ou7i4riba2bsx48w2', 'NzU1ZTdjNmU4YmRlNmYxMTQ1OTJkZDMxZjU0YjFmZWMxOTRkYTYxMDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkYmQyOGRlMzRhMDczOWMyYzNhZDk2YjVmOTA2YjhhMjFlOWY5ZDY2In0=', '2020-02-17 18:42:53.135116+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('nkgu2p1we91975nyhxb5g4tkafqw5cbf', 'NzEzZmZiYjZiMjMxMzliMTRmNjFjMTZiNDQzYzRlZDY2YTMzZGE1Zjp7Il9hdXRoX3VzZXJfaWQiOiI4IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJjZDcxZmJlMGQxMjIzNjYxMmVhZmVlZDY2OGY3MzI2Yjk2OGM0OTYxIn0=', '2020-02-22 22:36:33.74959+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('lmv1grfgsfyzh1x08q5pasc7aoki6hnl', 'ZTAyY2M0MDc5MzE2OTVjYjZlNmNkZGZmYjgwMmRiYTUxNmI5MzI1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwYjgwOGRjZWFlNTM4ZWM1YjY1YTY5MzQxZTJhYzg2MzU1NTQxNzIxIn0=', '2020-02-23 21:35:58.574944+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('m9gvphav226uaysk1tzcpvs6eqaii9fc', 'ZTAyY2M0MDc5MzE2OTVjYjZlNmNkZGZmYjgwMmRiYTUxNmI5MzI1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwYjgwOGRjZWFlNTM4ZWM1YjY1YTY5MzQxZTJhYzg2MzU1NTQxNzIxIn0=', '2020-02-24 00:21:06.062955+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('obb8xuqfp4r597mln0bb80ve1zfqc85m', 'ZTAyY2M0MDc5MzE2OTVjYjZlNmNkZGZmYjgwMmRiYTUxNmI5MzI1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwYjgwOGRjZWFlNTM4ZWM1YjY1YTY5MzQxZTJhYzg2MzU1NTQxNzIxIn0=', '2020-02-24 10:39:33.491214+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('qy9elddlvm1sa8fw6gyh2n12d2uiitx7', 'ZTAyY2M0MDc5MzE2OTVjYjZlNmNkZGZmYjgwMmRiYTUxNmI5MzI1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwYjgwOGRjZWFlNTM4ZWM1YjY1YTY5MzQxZTJhYzg2MzU1NTQxNzIxIn0=', '2020-02-24 11:40:38.929982+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('givfgrdhyhshb3z8dgqo5aqp37d3v0ud', 'ZGY1MDc4OThiNDA2OGI5MThlYjNmZWUxYTVlN2Q2ODEyNDE1NDlkNjp7Il9hdXRoX3VzZXJfaWQiOiI1IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmZDU2MmI2YWYzN2Q4NGM5OGY5YjYxMTc4Mzk2YWE0YjdiZGI1ODJlIn0=', '2020-02-24 21:40:12.955964+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('p0jk1cvaw1eegyqcgca51czxiqg0927w', 'NmYzMjBmZDg0OWRhMGU2OTYyNGIzYmVjNDZkZjYxN2E1MDdkNzJkMjp7Il9hdXRoX3VzZXJfaWQiOiI2IiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIxOGYzYWI3Njc4NzBjOTU4OGE1YWQ0ZjUyODJhNjkzOGZjODY0MzI4In0=', '2020-03-02 21:44:30.239135+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('hrrlcfiuk83odh2uiylvq33oxb70qoun', 'ZTAyY2M0MDc5MzE2OTVjYjZlNmNkZGZmYjgwMmRiYTUxNmI5MzI1MDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwYjgwOGRjZWFlNTM4ZWM1YjY1YTY5MzQxZTJhYzg2MzU1NTQxNzIxIn0=', '2020-04-17 10:43:09.620611+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('h1zzhpagn542je49ibvq1twq1tt39a3m', 'MDg4NmNiZmIxNzZlMTc2OTU2ZWQwYjg2MzhjZTQ4MTk0MDFmYzZiYjp7Il9hdXRoX3VzZXJfaWQiOiIxMCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiNzg3YTRlMWRhMDAyYmVlODEzNDI4ZTIzOWY0N2U4ZjMyNWI3MWE2MSJ9', '2020-07-20 13:09:30.511048+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('wlb7wrhpycc4kmy8wm1rtt2kmokw3b14', 'MDM2MWMyMmRkMzMwMTc0ZTQwZDhhNDJkYmNjZDA1YTU0MzBmYWE4YTp7Il9hdXRoX3VzZXJfaWQiOiIxMSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMWM3Mzg2OGY5NGYxYjU4OWYyMzUyYzA4NmNhNWI5N2RiMGQwMDBiYiJ9', '2020-07-22 07:14:03.371102+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('0xr0p5rran80klwoygzw9c8z7lckfu08', 'MDg4NmNiZmIxNzZlMTc2OTU2ZWQwYjg2MzhjZTQ4MTk0MDFmYzZiYjp7Il9hdXRoX3VzZXJfaWQiOiIxMCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiNzg3YTRlMWRhMDAyYmVlODEzNDI4ZTIzOWY0N2U4ZjMyNWI3MWE2MSJ9', '2020-07-23 20:48:54.119942+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('pw5h67s194i8xcljsvbulj248qtjnf2h', 'MDg4NmNiZmIxNzZlMTc2OTU2ZWQwYjg2MzhjZTQ4MTk0MDFmYzZiYjp7Il9hdXRoX3VzZXJfaWQiOiIxMCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiNzg3YTRlMWRhMDAyYmVlODEzNDI4ZTIzOWY0N2U4ZjMyNWI3MWE2MSJ9', '2020-07-24 08:10:27.53553+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('e70y5kh11e9ty4r037c6kaxallysu5bz', 'ZTRjZDA0YWQwOGJhNWRhYjgzMjFlNTliMGMxMDYwYWNhZDAwNDc5Mzp7Il9hdXRoX3VzZXJfaWQiOiIxMiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiYTRjNzRlNTU2NjY5OGRlYjAwMTE2YWJjNGFjNzA1NTBiMDUxZjUyYSJ9', '2020-09-09 01:55:14.201078+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('4bi9gr48g227x4qy8gtcjsssjyn9d7af', 'MWZkZTBmMmY0YWNkNmE5NjliNDNiNmVlMzZmZTQ3MTJhMzJlNmVjMDp7Il9hdXRoX3VzZXJfaWQiOiIxMyIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiYzQ5NWMyMTQ3YTcwY2JmMjk1ZThkMmYzNzFlNTA5YzRjYWI0OGE1ZSJ9', '2020-09-14 01:56:25.227672+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('1etdfmoln9wc3sveommvtlzea656yb9b', 'NWIyZWQxMmRlYjE0MTQyODkyN2MwMTc0ZmQwN2JkNjBmZDhiODc5Yzp7Il9hdXRoX3VzZXJfaWQiOiIxNCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiNWM0ZTNhMjNmYjIwMTdlOTNhOTc0ODc2YzY2MWEzNWRlMDRlMDJiYyJ9', '2020-09-24 00:03:33.641778+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('qpfwp9uxn7ft4ddq4hzlvfln8w17cz2d', 'NmNmZjZjODQ0NWMzYzUzMDQxMTE3ZmU2MTgxMDZhYjk2MDg2YzgyMTp7Il9hdXRoX3VzZXJfaWQiOiIxNSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiNzI5OGUzNTBlYWNjMWFiYWRkMWJhMGU5NjhkZDJjOWFlNDRhZjE3YSJ9', '2020-09-24 23:11:51.551413+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('x8hvfbuh98ffgbyv8aa46r18917k3eba', 'YWUyYjk5NGMzODUyNzUzMWM0NDg0ZjQ4ZjgxYmYxNDdiYjk1M2FkNjp7Il9hdXRoX3VzZXJfaWQiOiIxNyIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiNjNkY2E4MzM5Mzk3MmFiMmIwN2IxNWE4NTA5MDNmZDFjYzg4YTRiMSJ9', '2021-03-03 11:28:14.335335+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('u21jk97mq2hanucpp8gifue4pjfo9096', 'Mjg3YzY2Y2MzMjQ4YjU1ODAwOGFkZGE1ODljZWJmMDE4ODcwYzE3MTp7Il9hdXRoX3VzZXJfaWQiOiIxOCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMzk2NDA1MDMyYzAwYjJkYmIyODhmZDUzMWEyODM1NjdhMzQ4NDczMSJ9', '2021-03-22 18:46:18.356941+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('ixh23r1xda3pjqvflqqnjpj7sbdxdi4u', 'ZWViNDUwN2FhOTIyMWJlMmJiZjNjMDc4ZjAxOGE5MjEzZDc1MjJlMTp7Il9hdXRoX3VzZXJfaWQiOiIxOSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiZTE3YWFkZTY2YTBmMTNlMGNmOWU5MGQ0MjhiMDI5MzE2MjIwYjdiMyJ9', '2021-03-27 22:05:20.023233+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('h3yky1m4sdmrk5tr3axu0bvxh2r8y22s', 'ZDk3MmEzNzc5OTVkYjNiNTJjNDc2YmUzOTJkN2Q5OWE4YTI0MGViNjp7Il9hdXRoX3VzZXJfaWQiOiIyNCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMGM3NjQ3YzQ3MDEwODFmYWQ0YmRkNDc2Y2Q1OThjY2JiZGJjZWRkYiJ9', '2021-05-19 19:05:03.057227+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('c74xoyl6nmwhg5vsnrljyel2onje6aq5', 'ZDk3MmEzNzc5OTVkYjNiNTJjNDc2YmUzOTJkN2Q5OWE4YTI0MGViNjp7Il9hdXRoX3VzZXJfaWQiOiIyNCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMGM3NjQ3YzQ3MDEwODFmYWQ0YmRkNDc2Y2Q1OThjY2JiZGJjZWRkYiJ9', '2021-05-21 18:20:56.87821+00');
INSERT INTO public.django_session (session_key, session_data, expire_date) VALUES ('0pjw67hc6wx3gr2mlbdxwulm1nhw9ui7', 'ZDk3MmEzNzc5OTVkYjNiNTJjNDc2YmUzOTJkN2Q5OWE4YTI0MGViNjp7Il9hdXRoX3VzZXJfaWQiOiIyNCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiMGM3NjQ3YzQ3MDEwODFmYWQ0YmRkNDc2Y2Q1OThjY2JiZGJjZWRkYiJ9', '2021-05-22 12:31:40.867695+00');


--
-- TOC entry 4437 (class 0 OID 712843)
-- Dependencies: 247
-- Data for Name: misc_cities; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1, 'Bath', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2, 'Birmingham', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3, 'Bradford', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (4, 'Brighton and Hove', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (5, 'Bristol', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (6, 'Cambridge', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (7, 'Canterbury', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (8, 'Carlisle', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (9, 'Chester', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (10, 'Chichester', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (11, 'Coventry', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (12, 'Derby', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (13, 'Durham', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (14, 'Ely', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (15, 'Exeter', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (16, 'Gloucester', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (17, 'Hereford', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (18, 'Kingston upon Hull', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (19, 'Lancaster', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (20, 'Leeds', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (21, 'Leicester', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (22, 'Lichfield', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (23, 'Lincoln', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (24, 'Liverpool', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (25, 'London', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (26, 'Manchester', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (27, 'Newcastle upon Tyne', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (28, 'Norwich', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (29, 'Nottingham', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (30, 'Oxford', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (31, 'Peterborough', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (32, 'Plymouth', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (33, 'Portsmouth', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (34, 'Preston', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (35, 'Ripon', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (36, 'Salford', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (37, 'Salisbury', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (38, 'Sheffield', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (39, 'Southampton', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (40, 'St Albans', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (41, 'Stoke-on-Trent', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (42, 'Sunderland', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (43, 'Truro', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (44, 'Wakefield', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (45, 'Wells', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (46, 'Westminster', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (47, 'Winchester', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (48, 'Wolverhampton', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (49, 'Worcester', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (50, 'York', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (51, 'Kabul', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (52, 'Kandahar', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (53, 'Mazar-e Sharif', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (54, 'Herat', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (55, 'Jalalabad', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (56, 'Kunduz', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (57, 'Ghazni', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (58, 'Balkh', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (59, 'Baghlan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (60, 'Gardez', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (61, 'Khost', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (62, 'Maymana', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (63, 'Khanabad', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (64, 'Bazarak', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (65, 'Khulm', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (66, 'Taloqan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (67, 'Bamyan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (68, 'Pul-e Khumri', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (69, 'Shibirghan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (70, 'Charikar', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (71, 'Sar-e Pul', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (72, 'Zaranj', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (73, 'Paghman', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (74, 'Asadabad', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (75, 'Aibak', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (76, 'Fayzabad', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (77, 'Lashkar Gah', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (78, 'Gereshk', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (79, 'Farah', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (80, 'Ghormach', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (81, 'Shindand', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (82, 'Andkhoy', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (83, 'Rustaq', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (84, 'Qarawul', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (85, 'Nahrin', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (86, 'Baraki Barak', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (87, 'Art Khwajah', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (88, 'Kafir Qala', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (89, 'Karukh', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (90, 'Mehtar Lam', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (91, 'Kushk', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (92, 'Shahrak', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (93, 'Asmar', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (94, 'Sang-e Charak', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (95, 'Khash', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (96, 'Markaz-e Woluswali-ye Achin', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (97, 'Jabal os Saraj', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (98, 'Qarqin', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (99, 'Fayroz Koh', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (100, 'Mirabad', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (101, 'Zarghun Shahr', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (102, 'Sangin', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (103, 'Panjab', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (104, 'Uruzgan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (105, 'Pul-e ''Alam', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (106, 'Chiras', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (107, 'Hukumati Azrah', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (108, 'Qarah Bagh', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (109, 'Qalat', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (110, 'Ashkasham', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (111, 'Jurm', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (112, 'Kuhsan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (113, 'Tukzar', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (114, 'Chahar Burj', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (115, 'Larkird', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (116, 'Rudbar', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (117, 'Farkhar', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (118, 'Zindah Jan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (119, 'Anar Darah', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (120, 'Tarinkot', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (121, 'Imam Sahib', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (122, 'Darzab', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (123, '''Alaqahdari Dishu', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (124, 'Tagaw-Bay', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (125, 'Markaz-e Hukumat-e Darweshan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (126, 'Qala i Naw', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (127, 'Qarchi Gak', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (128, 'Dasht-e Archi', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (129, 'Qal''ah-ye Shahr', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (130, 'Sidqabad', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (131, 'Zarah Sharan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (132, 'Tir Pul', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (133, 'Basawul', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (134, 'Yangi Qal''ah', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (135, 'Tagab', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (136, 'Khandud', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (137, 'Mir Bachah Kot', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (138, 'Sharan', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (139, 'Maydanshakhr', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (140, 'Parun', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (141, 'Nili', 'AFG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (142, 'Tirana', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (143, 'Durres', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (144, 'Elbasan', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (145, 'Vlore', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (146, 'Shkoder', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (147, 'Pogradec', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (148, 'Fier-Cifci', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (149, 'Patos', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (150, 'Korce', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (151, 'Fier', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (152, 'Berat', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (153, 'Lushnje', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (154, 'Kavaje', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (155, 'Lac', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (156, 'Gjirokaster', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (157, 'Patos Fshat', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (158, 'Kruje', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (159, 'Lezhe', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (160, 'Kucove', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (161, 'Kukes', 'ALB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (162, 'Algiers', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (163, 'Boumerdas', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (164, 'Oran', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (165, 'Tebessa', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (166, 'Constantine', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (167, 'Biskra', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (168, 'Setif', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (169, 'Batna', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (170, 'Bab Ezzouar', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (171, 'Annaba', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (172, 'Sidi Bel Abbes', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (173, 'Blida', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (174, 'Tiaret', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (175, 'Chlef', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (176, 'Bordj Bou Arreridj', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (177, 'Ech Chettia', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (178, 'Bejaia', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (179, 'Skikda', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (180, 'El Achir', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (181, 'Souk Ahras', 'DZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (182, 'Pago Pago', 'ASM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (183, 'Tafuna', 'ASM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (184, 'Ta`u', 'ASM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (185, 'Taulaga', 'ASM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (186, 'Andorra la Vella', 'AND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (187, 'les Escaldes', 'AND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (188, 'Encamp', 'AND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (189, 'Sant Julia de Loria', 'AND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (190, 'la Massana', 'AND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (191, 'Canillo', 'AND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (192, 'Ordino', 'AND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (193, 'Luanda', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (194, 'N''dalatando', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (195, 'Huambo', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (196, 'Lobito', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (197, 'Benguela', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (198, 'Cuito', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (199, 'Lubango', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (200, 'Malanje', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (201, 'Namibe', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (202, 'Soio', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (203, 'Cabinda', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (204, 'Uige', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (205, 'Saurimo', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (206, 'Sumbe', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (207, 'Menongue', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (208, 'Caxito', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (209, 'Longonjo', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (210, 'Mbanza Congo', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (211, 'Caala', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (212, 'Luena', 'AGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (213, 'The Valley', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (214, 'Blowing Point Village', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (215, 'Sandy Ground Village', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (216, 'Sandy Hill', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (217, 'East End Village', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (218, 'George Hill', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (219, 'Island Harbour', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (220, 'North Hill Village', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (221, 'North Side', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (222, 'South Hill Village', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (223, 'Stoney Ground', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (224, 'Farrington', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (225, 'The Quarter', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (226, 'West End Village', 'AIA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (227, 'Saint John''s', 'ATG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (228, 'Piggotts', 'ATG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (229, 'Bolands', 'ATG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (230, 'Codrington', 'ATG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (231, 'Parham', 'ATG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (232, 'Falmouth', 'ATG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (233, 'Buenos Aires', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (234, 'Cordoba', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (235, 'Rosario', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (236, 'Mendoza', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (237, 'San Miguel de Tucuman', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (238, 'La Plata', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (239, 'Mar del Plata', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (240, 'Quilmes', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (241, 'Salta', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (242, 'Santa Fe de la Vera Cruz', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (243, 'San Juan', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (244, 'Resistencia', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (245, 'Santiago del Estero', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (246, 'Corrientes', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (247, 'Posadas', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (248, 'Moron', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (249, 'San Salvador de Jujuy', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (250, 'Bahia Blanca', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (251, 'Parana', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (252, 'Neuquen', 'ARG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (253, 'Yerevan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (254, 'Gyumri', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (255, 'Vanadzor', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (256, 'Vagharshapat', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (257, 'Hrazdan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (258, 'Abovyan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (259, 'Kapan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (260, 'Ararat', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (261, 'Armavir', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (262, 'Step''anavan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (263, 'Gavarr', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (264, 'Artashat', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (265, 'Goris', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (266, 'Masis', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (267, 'Ashtarak', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (268, 'Sevan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (269, 'Hats''avan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (270, 'Spitak', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (271, 'Ijevan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (272, 'Dilijan', 'ARM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (273, 'Oranjestad', 'ABW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (274, 'Tanki Leendert', 'ABW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (275, 'San Nicolas', 'ABW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (276, 'Santa Cruz', 'ABW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (277, 'Paradera', 'ABW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (278, 'Savaneta', 'ABW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (279, 'Sydney', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (280, 'Melbourne', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (281, 'Brisbane', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (282, 'Perth', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (283, 'Adelaide', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (284, 'Gold Coast', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (285, 'Canberra', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (286, 'Newcastle', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (287, 'Wollongong', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (288, 'Logan City', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (289, 'Geelong', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (290, 'Hobart', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (291, 'Townsville', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (292, 'Cairns', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (293, 'Toowoomba', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (294, 'Darwin', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (295, 'Rockingham', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (296, 'Launceston', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (297, 'Bendigo', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (298, 'Ballarat', 'AUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (299, 'Vienna', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (300, 'Graz', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (301, 'Linz', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (302, 'Favoriten', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (303, 'Donaustadt', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (304, 'Floridsdorf', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (305, 'Salzburg', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (306, 'Innsbruck', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (307, 'Ottakring', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (308, 'Simmering', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (309, 'Meidling', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (310, 'Klagenfurt am Woerthersee', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (311, 'Villach', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (312, 'Hernals', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (313, 'Hietzing', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (314, 'Dornbirn', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (315, 'Wiener Neustadt', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (316, 'Steyr', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (317, 'Hoetting', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (318, 'Feldkirch', 'AUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (319, 'Baku', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (320, 'Ganja', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (321, 'Sumqayit', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (322, 'Lankaran', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (323, 'Mingelchaur', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (324, 'Saatli', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (325, 'Qaracuxur', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (326, 'Sirvan', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (327, 'Bakixanov', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (328, 'Nakhchivan', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (329, 'Sheki', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (330, 'Yevlakh', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (331, 'Xankandi', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (332, 'Bilajari', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (333, 'Mastaga', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (334, 'Agdam', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (335, 'Khirdalan', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (336, 'Barda', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (337, 'Xacmaz', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (338, 'Salyan', 'AZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (339, 'Nassau', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (340, 'Lucaya', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (341, 'Freeport', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (342, 'West End', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (343, 'Cooper''s Town', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (344, 'San Andros', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (345, 'George Town', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (346, 'Marsh Harbour', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (347, 'High Rock', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (348, 'Clarence Town', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (349, 'Spanish Wells', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (350, 'Arthur''s Town', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (351, 'Alice Town', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (352, 'Cockburn Town', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (353, 'Matthew Town', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (354, 'Colonel Hill', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (355, 'Abraham''s Bay', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (356, 'Port Nelson', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (357, 'Duncan Town', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (358, 'Masons Bay', 'BHS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (359, 'Manama', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (360, 'Al Muharraq', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (361, 'Ar Rifa''', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (362, 'Dar Kulayb', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (363, 'Madinat Hamad', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (364, 'Madinat ''Isa', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (365, 'Sitrah', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (366, 'Jidd Hafs', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (367, 'Al Hadd', 'BHR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (368, 'Dhaka', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (369, 'Chittagong', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (370, 'Khulna', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (371, 'Rajshahi', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (372, 'Comilla', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (373, 'Shibganj', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (374, 'Natore', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (375, 'Rangpur', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (376, 'Tungi', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (377, 'Narsingdi', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (378, 'Bagerhat', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (379, 'Cox''s Bazar', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (380, 'Jessore', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (381, 'Nagarpur', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (382, 'Sylhet', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (383, 'Mymensingh', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (384, 'Narayanganj', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (385, 'Bogra', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (386, 'Dinajpur', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (387, 'Barisal', 'BGD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (388, 'Bridgetown', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (389, 'Speightstown', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (390, 'Oistins', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (391, 'Bathsheba', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (392, 'Holetown', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (393, 'Crane', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (394, 'Greenland', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (395, 'Checker Hall', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (396, 'Four Cross Roads', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (397, 'Welchman Hall', 'BRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (398, 'Minsk', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (399, 'Gomel', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (400, 'Mahilyow', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (401, 'Vitebsk', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (402, 'Hrodna', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (403, 'Brest', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (404, 'Babruysk', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (405, 'Baranovichi', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (406, 'Barysaw', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (407, 'Pinsk', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (408, 'Orsha', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (409, 'Novoye Medvezhino', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (410, 'Mazyr', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (411, 'Malinovka', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (412, 'Salihorsk', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (413, 'Maladzyechna', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (414, 'Navapolatsk', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (415, 'Lida', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (416, 'Polatsk', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (417, 'Zhlobin', 'BLR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (418, 'Brussels', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (419, 'Antwerpen', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (420, 'Gent', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (421, 'Charleroi', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (422, 'Liege', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (423, 'Brugge', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (424, 'Namur', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (425, 'Leuven', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (426, 'Mons', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (427, 'Deurne', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (428, 'Aalst', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (429, 'Mechelen', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (430, 'La Louviere', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (431, 'Kortrijk', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (432, 'Hasselt', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (433, 'Ostend', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (434, 'Sint-Niklaas', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (435, 'Tournai', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (436, 'Genk', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (437, 'Seraing', 'BEL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (438, 'Belize City', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (439, 'San Ignacio', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (440, 'Orange Walk', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (441, 'Belmopan', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (442, 'Dangriga', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (443, 'Corozal', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (444, 'San Pedro', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (445, 'Benque Viejo el Carmen', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (446, 'Punta Gorda', 'BLZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (447, 'Cotonou', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (448, 'Abomey-Calavi', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (449, 'Djougou', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (450, 'Porto-Novo', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (451, 'Parakou', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (452, 'Bohicon', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (453, 'Kandi', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (454, 'Lokossa', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (455, 'Ouidah', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (456, 'Abomey', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (457, 'Natitingou', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (458, 'Save', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (459, 'Nikki', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (460, 'Dogbo', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (461, 'Cove', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (462, 'Malanville', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (463, 'Pobe', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (464, 'Savalou', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (465, 'Sakete', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (466, 'Come', 'BEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (467, 'Hamilton', 'BMU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (468, 'Thimphu', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (469, 'Punakha', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (470, 'Tsirang', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (471, 'Phuntsholing', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (472, 'Pemagatshel', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (473, 'Sarpang', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (474, 'Samdrup Jongkhar', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (475, 'Wangdue Phodrang', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (476, 'Samtse', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (477, 'Jakar', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (478, 'Trashi Yangtse', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (479, 'Mongar', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (480, 'Tsimasham', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (481, 'Trongsa', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (482, 'Daga', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (483, 'Paro', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (484, 'Ha', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (485, 'Trashigang', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (486, 'Shemgang', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (487, 'Gasa', 'BTN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (488, 'Santa Cruz de la Sierra', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (489, 'Cochabamba', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (490, 'La Paz', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (491, 'Sucre', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (492, 'Oruro', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (493, 'Tarija', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (494, 'Potosi', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (495, 'Sacaba', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (496, 'Montero', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (497, 'Quillacollo', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (498, 'Trinidad', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (499, 'Yacuiba', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (500, 'Riberalta', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (501, 'Tiquipaya', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (502, 'Guayaramerin', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (503, 'Bermejo', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (504, 'Mizque', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (505, 'Villazon', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (506, 'Llallagua', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (507, 'Camiri', 'BOL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (508, 'Sarajevo', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (509, 'Banja Luka', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (510, 'Zenica', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (511, 'Tuzla', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (512, 'Mostar', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (513, 'Bihac', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (514, 'Bugojno', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (515, 'Brcko', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (516, 'Bijeljina', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (517, 'Prijedor', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (518, 'Trebinje', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (519, 'Travnik', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (520, 'Doboj', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (521, 'Cazin', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (522, 'Velika Kladusa', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (523, 'Visoko', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (524, 'Gorazde', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (525, 'Konjic', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (526, 'Gracanica', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (527, 'Gradacac', 'BIH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (528, 'Gaborone', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (529, 'Francistown', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (530, 'Molepolole', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (531, 'Selebi-Phikwe', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (532, 'Maun', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (533, 'Serowe', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (534, 'Kanye', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (535, 'Mahalapye', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (536, 'Mogoditshane', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (537, 'Mochudi', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (538, 'Lobatse', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (539, 'Palapye', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (540, 'Ramotswa', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (541, 'Thamaga', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (542, 'Mosopa', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (543, 'Letlhakane', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (544, 'Tonota', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (545, 'Janeng', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (546, 'Gabane', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (547, 'Ghanzi', 'BWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (548, 'Sao Paulo', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (549, 'Rio de Janeiro', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (550, 'Salvador', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (551, 'Fortaleza', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (552, 'Belo Horizonte', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (553, 'Brasilia', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (554, 'Curitiba', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (555, 'Manaus', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (556, 'Recife', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (557, 'Belem', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (558, 'Porto Alegre', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (559, 'Goiania', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (560, 'Guarulhos', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (561, 'Campinas', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (562, 'Nova Iguacu', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (563, 'Maceio', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (564, 'Sao Luis', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (565, 'Duque de Caxias', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (566, 'Natal', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (567, 'Teresina', 'BRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (568, 'Road Town', 'VGB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (569, 'Bandar Seri Begawan', 'BRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (570, 'Kuala Belait', 'BRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (571, 'Seria', 'BRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (572, 'Tutong', 'BRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (573, 'Bangar', 'BRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (574, 'Sofia', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (575, 'Plovdiv', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (576, 'Varna', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (577, 'Burgas', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (578, 'Ruse', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (579, 'Stara Zagora', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (580, 'Pleven', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (581, 'Sliven', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (582, 'Dobrich', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (583, 'Shumen', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (584, 'Pernik', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (585, 'Yambol', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (586, 'Haskovo', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (587, 'Pazardzhik', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (588, 'Blagoevgrad', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (589, 'Veliko Turnovo', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (590, 'Gabrovo', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (591, 'Vratsa', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (592, 'Kazanlak', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (593, 'Vidin', 'BGR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (594, 'Ouagadougou', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (595, 'Bobo-Dioulasso', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (596, 'Koudougou', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (597, 'Ouahigouya', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (598, 'Banfora', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (599, 'Dedougou', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (600, 'Kaya', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (601, 'Dori', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (602, 'Tenkodogo', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (603, 'Reo', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (604, 'Hounde', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (605, 'Fada N''gourma', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (606, 'Koupela', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (607, 'Kombissiri', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (608, 'Garango', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (609, 'Nouna', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (610, 'Leo', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (611, 'Kongoussi', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (612, 'Diapaga', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (613, 'Kokologo', 'BFA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (614, 'Bujumbura', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (615, 'Muyinga', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (616, 'Ruyigi', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (617, 'Gitega', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (618, 'Ngozi', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (619, 'Rutana', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (620, 'Bururi', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (621, 'Makamba', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (622, 'Kayanza', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (623, 'Muramvya', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (624, 'Cibitoke', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (625, 'Bubanza', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (626, 'Karuzi', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (627, 'Cankuzo', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (628, 'Kirundo', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (629, 'Rumonge', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (630, 'Mwaro', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (631, 'Isale', 'BDI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (632, 'Phnom Penh', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (633, 'Takeo', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (634, 'Sihanoukville', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (635, 'Battambang', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (636, 'Siem Reap', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (637, 'Paoy Paet', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (638, 'Kampong Chhnang', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (639, 'Kampong Cham', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (640, 'Pursat', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (641, 'Ta Khmau', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (642, 'Phumi Veal Sre', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (643, 'Kampong Speu', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (644, 'Koh Kong', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (645, 'Prey Veng', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (646, 'Suong', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (647, 'Smach Mean Chey', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (648, 'Stung Treng', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (649, 'Tbeng Meanchey', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (650, 'Svay Rieng', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (651, 'Sisophon', 'KHM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (652, 'Douala', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (653, 'Yaounde', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (654, 'Garoua', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (655, 'Kousseri', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (656, 'Bamenda', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (657, 'Maroua', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (658, 'Bafoussam', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (659, 'Mokolo', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (660, 'Ngaoundere', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (661, 'Bertoua', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (662, 'Edea', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (663, 'Loum', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (664, 'Kumba', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (665, 'Nkongsamba', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (666, 'Mbouda', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (667, 'Dschang', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (668, 'Foumban', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (669, 'Ebolowa', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (670, 'Guider', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (671, 'Foumbot', 'CMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (672, 'Toronto', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (673, 'Montreal', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (674, 'Calgary', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (675, 'Ottawa', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (676, 'Edmonton', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (677, 'Mississauga', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (678, 'North York', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (679, 'Winnipeg', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (680, 'Scarborough', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (681, 'Vancouver', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (682, 'Quebec', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (683, 'Hamilton', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (684, 'Brampton', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (685, 'Surrey', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (686, 'Laval', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (687, 'Halifax', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (688, 'Etobicoke', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (689, 'London', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (690, 'Okanagan', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (691, 'Victoria', 'CAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (692, 'Praia', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (693, 'Mindelo', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (694, 'Santa Maria', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (695, 'Cova Figueira', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (696, 'Santa Cruz', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (697, 'Pedra Badejo', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (698, 'Sao Filipe', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (699, 'Assomada', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (700, 'Tarrafal', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (701, 'Espargos', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (702, 'Porto Novo', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (703, 'Calheta', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (704, 'Vila da Ribeira Brava', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (705, 'Tarrafal de Sao Nicolau', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (706, 'Picos', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (707, 'Vila do Maio', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (708, 'Ribeira Grande', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (709, 'Cidade Velha', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (710, 'Vila de Sal Rei', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (711, 'Sao Domingos', 'CPV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (712, 'George Town', 'CYM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (713, 'West Bay', 'CYM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (714, 'Bodden Town', 'CYM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (715, 'East End', 'CYM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (716, 'North Side', 'CYM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (717, 'Little Cayman', 'CYM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (718, 'Bangui', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (719, 'Bimbo', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (720, 'Mbaiki', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (721, 'Berberati', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (722, 'Kaga Bandoro', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (723, 'Bozoum', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (724, 'Carnot', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (725, 'Sibut', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (726, 'Bambari', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (727, 'Bria', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (728, 'Bouar', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (729, 'Bossangoa', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (730, 'Nola', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (731, 'Bangassou', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (732, 'Damara', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (733, 'Mobaye', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (734, 'Paoua', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (735, 'Boda', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (736, 'Ippy', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (737, 'Batangafo', 'CAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (738, 'N''Djamena', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (739, 'Moundou', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (740, 'Sarh', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (741, 'Abeche', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (742, 'Kelo', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (743, 'Koumra', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (744, 'Pala', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (745, 'Am Timan', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (746, 'Bongor', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (747, 'Mongo', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (748, 'Doba', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (749, 'Ati', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (750, 'Fada', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (751, 'Lai', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (752, 'Oum Hadjer', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (753, 'Bitkine', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (754, 'Mao', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (755, 'Massaguet', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (756, 'Dourbali', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (757, 'Mboursou Lere', 'TCD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (758, 'Santiago', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (759, 'Puente Alto', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (760, 'Antofagasta', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (761, 'Vina del Mar', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (762, 'Valparaiso', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (763, 'Talcahuano', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (764, 'San Bernardo', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (765, 'Temuco', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (766, 'Iquique', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (767, 'Concepcion', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (768, 'Rancagua', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (769, 'La Pintana', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (770, 'Talca', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (771, 'Arica', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (772, 'Coquimbo', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (773, 'Puerto Montt', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (774, 'La Serena', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (775, 'Chillan', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (776, 'Calama', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (777, 'Osorno', 'CHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (778, 'Shanghai', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (779, 'Beijing', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (780, 'Tianjin', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (781, 'Guangzhou', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (782, 'Shenzhen', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (783, 'Wuhan', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (784, 'Dongguan', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (785, 'Chongqing', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (786, 'Chengdu', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (787, 'Nanjing', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (788, 'Nanchong', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (789, 'Xi''an', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (790, 'Shenyang', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (791, 'Hangzhou', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (792, 'Harbin', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (793, 'Tai''an', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (794, 'Suzhou', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (795, 'Shantou', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (796, 'Jinan', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (797, 'Zhengzhou', 'CHN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (798, 'Bogota', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (799, 'Cali', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (800, 'Medellin', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (801, 'Barranquilla', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (802, 'Cartagena', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (803, 'Cucuta', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (804, 'Bucaramanga', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (805, 'Pereira', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (806, 'Santa Marta', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (807, 'Ibague', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (808, 'Bello', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (809, 'Pasto', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (810, 'Manizales', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (811, 'Neiva', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (812, 'Soledad', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (813, 'Villavicencio', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (814, 'Armenia', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (815, 'Soacha', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (816, 'Valledupar', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (817, 'Itaguei', 'COL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (818, 'Moroni', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (819, 'Moutsamoudou', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (820, 'Fomboni', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (821, 'Domoni', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (822, 'Tsimbeo', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (823, 'Adda-Doueni', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (824, 'Sima', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (825, 'Ouani', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (826, 'Mirontsi', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (827, 'Mkiriwadjumoi', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (828, 'Koni-Djodjo', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (829, 'Moya', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (830, 'Mbeni', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (831, 'Mitsamiouli', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (832, 'Barakani', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (833, 'Chandra', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (834, 'Ouellah', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (835, 'Mramani', 'COM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (836, 'Avarua', 'COK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (837, 'San Jose', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (838, 'Limon', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (839, 'San Francisco', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (840, 'Alajuela', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (841, 'Liberia', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (842, 'Paraiso', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (843, 'Puntarenas', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (844, 'San Isidro', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (845, 'Curridabat', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (846, 'San Vicente de Moravia', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (847, 'San Vicente', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (848, 'Purral', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (849, 'Turrialba', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (850, 'San Miguel', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (851, 'San Pedro', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (852, 'San Rafael Abajo', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (853, 'Quesada', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (854, 'Ipis', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (855, 'Cartago', 'CRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (856, 'Zagreb', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (857, 'Split', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (858, 'Rijeka', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (859, 'Osijek', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (860, 'Zadar', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (861, 'Slavonski Brod', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (862, 'Pula', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (863, 'Sesvete', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (864, 'Karlovac', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (865, 'Varazdin', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (866, 'Stenjevec', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (867, 'Sibenik', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (868, 'Centar', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (869, 'Sisak', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (870, 'Velika Gorica', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (871, 'Vinkovci', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (872, 'Vukovar', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (873, 'Dubrovnik', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (874, 'Bjelovar', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (875, 'Koprivnica', 'HRV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (876, 'Havana', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (877, 'Santiago de Cuba', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (878, 'Camaguey', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (879, 'Holguin', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (880, 'Guantanamo', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (881, 'Santa Clara', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (882, 'Diez de Octubre', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (883, 'Arroyo Naranjo', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (884, 'Las Tunas', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (885, 'Bayamo', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (886, 'Boyeros', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (887, 'Pinar del Rio', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (888, 'Cienfuegos', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (889, 'Habana del Este', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (890, 'San Miguel del Padron', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (891, 'Centro Habana', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (892, 'Matanzas', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (893, 'Ciego de Avila', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (894, 'Cerro', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (895, 'Manzanillo', 'CUB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (896, 'Nicosia', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (897, 'Limassol', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (898, 'Larnaca', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (899, 'Famagusta', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (900, 'Paphos', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (901, 'Kyrenia', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (902, 'Protaras', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (903, 'Pergamos', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (904, 'Morfou', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (905, 'Aradippou', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (906, 'Paralimni', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (907, 'Geroskipou Municipality', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (908, 'Lefka', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (909, 'Geri', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (910, 'Ypsonas', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (911, 'Dali', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (912, 'Tseri', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (913, 'Livadia', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (914, 'Dhromolaxia', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (915, 'Rizokarpaso', 'CYP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (916, 'Prague', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (917, 'Brno', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (918, 'Ostrava', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (919, 'Pilsen', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (920, 'Olomouc', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (921, 'Liberec', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (922, 'Ceske Budejovice', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (923, 'Hradec Kralove', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (924, 'Usti nad Labem', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (925, 'Pardubice', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (926, 'Havirov', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (927, 'Zlin', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (928, 'Kladno', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (929, 'Most', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (930, 'Karvina', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (931, 'Opava', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (932, 'Frydek-Mistek', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (933, 'Decin', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (934, 'Karlovy Vary', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (935, 'Teplice', 'CZE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (936, 'Copenhagen', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (937, 'Arhus', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (938, 'Odense', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (939, 'Aalborg', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (940, 'Frederiksberg', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (941, 'Esbjerg', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (942, 'Randers', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (943, 'Kolding', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (944, 'Vejle', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (945, 'Horsens', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (946, 'Hvidovre', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (947, 'Greve', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (948, 'Herning', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (949, 'Roskilde', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (950, 'Silkeborg', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (951, 'Naestved', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (952, 'Ballerup', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (953, 'Charlottenlund', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (954, 'Vanlose', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (955, 'Fredericia', 'DNK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (956, 'Djibouti', 'DJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (957, '''Ali Sabieh', 'DJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (958, 'Danan', 'DJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (959, 'Tadjourah', 'DJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (960, 'Obock', 'DJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (961, 'Dikhil', 'DJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (962, 'Arta', 'DJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (963, 'Roseau', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (964, 'Portsmouth', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (965, 'Berekua', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (966, 'Saint Joseph', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (967, 'Wesley', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (968, 'Soufriere', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (969, 'Pointe Michel', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (970, 'Colihaut', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (971, 'Rosalie', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (972, 'Pont Casse', 'DMA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (973, 'Santo Domingo', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (974, 'Santiago de los Caballeros', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (975, 'Santo Domingo Oeste', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (976, 'Santo Domingo Este', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (977, 'San Pedro de Macoris', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (978, 'La Romana', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (979, 'Bella Vista', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (980, 'San Cristobal', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (981, 'Puerto Plata', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (982, 'San Francisco de Macoris', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (983, 'Salvaleon de Higueey', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (984, 'Concepcion de La Vega', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (985, 'Punta Cana', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (986, 'Santa Cruz de Barahona', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (987, 'Bonao', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (988, 'San Juan de la Maguana', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (989, 'Bajos de Haina', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (990, 'Bani', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (991, 'Moca', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (992, 'Azua', 'DOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (993, 'Kinshasa', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (994, 'Lubumbashi', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (995, 'Mbuji-Mayi', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (996, 'Kisangani', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (997, 'Masina', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (998, 'Kananga', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (999, 'Likasi', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1000, 'Kolwezi', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1001, 'Tshikapa', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1002, 'Beni', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1003, 'Bukavu', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1004, 'Mwene-Ditu', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1005, 'Kikwit', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1006, 'Mbandaka', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1007, 'Matadi', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1008, 'Uvira', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1009, 'Boma', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1010, 'Butembo', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1011, 'Gandajika', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1012, 'Kalemie', 'COD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1013, 'Guayaquil', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1014, 'Quito', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1015, 'Cuenca', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1016, 'Santo Domingo de los Colorados', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1017, 'Machala', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1018, 'Manta', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1019, 'Portoviejo', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1020, 'Eloy Alfaro', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1021, 'Esmeraldas', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1022, 'Ambato', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1023, 'Tutamandahostel', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1024, 'Milagro', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1025, 'Ibarra', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1026, 'Riobamba', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1027, 'Quevedo', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1028, 'Loja', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1029, 'Tulcan', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1030, 'Babahoyo', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1031, 'La Libertad', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1032, 'Latacunga', 'ECU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1033, 'Cairo', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1034, 'Alexandria', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1035, 'Giza', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1036, 'Port Said', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1037, 'Suez', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1038, 'Al Mahallah al Kubra', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1039, 'Luxor', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1040, 'Asyut', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1041, 'Al Mansurah', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1042, 'Tanda', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1043, 'Al Fayyum', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1044, 'Zagazig', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1045, 'Ismailia', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1046, 'Kafr ad Dawwar', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1047, 'Aswan', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1048, 'Qina', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1049, 'Halwan', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1050, 'Damanhur', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1051, 'Al Minya', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1052, 'Idku', 'EGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1053, 'San Salvador', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1054, 'Soyapango', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1055, 'Santa Ana', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1056, 'San Miguel', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1057, 'Mejicanos', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1058, 'Santa Tecla', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1059, 'Apopa', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1060, 'Delgado', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1061, 'Sonsonate', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1062, 'San Marcos', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1063, 'Usulutan', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1064, 'Cojutepeque', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1065, 'Cuscatancingo', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1066, 'San Vicente', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1067, 'Zacatecoluca', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1068, 'San Martin', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1069, 'Ilopango', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1070, 'Ahuachapan', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1071, 'Antiguo Cuscatlan', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1072, 'Chalchuapa', 'SLV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1073, 'Bata', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1074, 'Malabo', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1075, 'Ebebiyin', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1076, 'Aconibe', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1077, 'Anisoc', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1078, 'Luba', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1079, 'Evinayong', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1080, 'Mongomo', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1081, 'Mikomeseng', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1082, 'Rebola', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1083, 'San Antonio de Pale', 'GNQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1084, 'Asmara', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1085, 'Keren', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1086, 'Massawa', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1087, 'Assab', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1088, 'Mendefera', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1089, 'Barentu', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1090, 'Adi Keyh', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1091, 'Edd', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1092, 'Dek''emhare', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1093, 'Ak''ordat', 'ERI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1094, 'Tallinn', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1095, 'Tartu', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1096, 'Narva', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1097, 'Kohtla-Jaerve', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1098, 'Paernu', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1099, 'Viljandi', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1100, 'Rakvere', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1101, 'Sillamaee', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1102, 'Maardu', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1103, 'Kuressaare', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1104, 'Voru', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1105, 'Valga', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1106, 'Haapsalu', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1107, 'Johvi', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1108, 'Paide', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1109, 'Keila', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1110, 'Kivioli', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1111, 'Tapa', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1112, 'Polva', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1113, 'Jogeva', 'EST');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1114, 'Addis Ababa', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1115, 'Dire Dawa', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1116, 'Mek''ele', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1117, 'Nazret', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1118, 'Bahir Dar', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1119, 'Gondar', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1120, 'Dese', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1121, 'Hawassa', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1122, 'Jimma', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1123, 'Bishoftu', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1124, 'Kombolcha', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1125, 'Harar', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1126, 'Sodo', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1127, 'Shashemene', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1128, 'Hosa''ina', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1129, 'Arba Minch', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1130, 'Adigrat', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1131, 'Debre Mark''os', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1132, 'Debre Birhan', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1133, 'Jijiga', 'ETH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1134, 'Stanley', 'FLK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1135, 'Torshavn', 'FRO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1136, 'Klaksvik', 'FRO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1137, 'Fuglafjordur', 'FRO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1138, 'Tvoroyri', 'FRO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1139, 'Midvagur', 'FRO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1140, 'Sandur', 'FRO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1141, 'Suva', 'FJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1142, 'Lautoka', 'FJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1143, 'Nadi', 'FJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1144, 'Labasa', 'FJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1145, 'Ba', 'FJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1146, 'Levuka', 'FJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1147, 'Ahau', 'FJI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1148, 'Helsinki', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1149, 'Espoo', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1150, 'Tampere', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1151, 'Vantaa', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1152, 'Turku', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1153, 'Oulu', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1154, 'Lahti', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1155, 'Kuopio', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1156, 'Jyvaeskylae', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1157, 'Pori', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1158, 'Lappeenranta', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1159, 'Vaasa', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1160, 'Kotka', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1161, 'Joensuu', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1162, 'Haemeenlinna', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1163, 'Porvoo', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1164, 'Mikkeli', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1165, 'Hyvinge', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1166, 'Jaervenpaeae', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1167, 'Nurmijaervi', 'FIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1168, 'Paris', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1169, 'Marseille', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1170, 'Lyon', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1171, 'Toulouse', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1172, 'Nice', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1173, 'Nantes', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1174, 'Strasbourg', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1175, 'Montpellier', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1176, 'Bordeaux', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1177, 'Lille', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1178, 'Rennes', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1179, 'Reims', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1180, 'Le Havre', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1181, 'Cergy-Pontoise', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1182, 'Saint-Etienne', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1183, 'Toulon', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1184, 'Angers', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1185, 'Grenoble', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1186, 'Dijon', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1187, 'Nimes', 'FRA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1188, 'Cayenne', 'GUF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1189, 'Matoury', 'GUF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1190, 'Saint-Laurent-du-Maroni', 'GUF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1191, 'Kourou', 'GUF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1192, 'Remire-Montjoly', 'GUF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1193, 'Macouria', 'GUF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1194, 'Mana', 'GUF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1195, 'Faaa', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1196, 'Papeete', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1197, 'Punaauia', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1198, 'Pirae', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1199, 'Mahina', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1200, 'Paea', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1201, 'Papao', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1202, 'Arue', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1203, 'Afaahiti', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1204, 'Uturoa', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1205, 'Taiohae', 'PYF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1206, 'Libreville', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1207, 'Port-Gentil', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1208, 'Franceville', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1209, 'Oyem', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1210, 'Moanda', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1211, 'Mouila', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1212, 'Lambarene', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1213, 'Tchibanga', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1214, 'Koulamoutou', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1215, 'Makokou', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1216, 'Bitam', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1217, 'Gamba', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1218, 'Mounana', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1219, 'Ntoum', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1220, 'Lastoursville', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1221, 'Okondja', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1222, 'Ndende', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1223, 'Booue', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1224, 'Fougamou', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1225, 'Ndjole', 'GAB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1226, 'Serekunda', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1227, 'Brikama', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1228, 'Bakau', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1229, 'Banjul', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1230, 'Farafenni', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1231, 'Lamin', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1232, 'Sukuta', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1233, 'Basse Santa Su', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1234, 'Gunjur', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1235, 'Soma', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1236, 'Sabi', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1237, 'Bansang', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1238, 'Abuko', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1239, 'Essau', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1240, 'Barra', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1241, 'Georgetown', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1242, 'Kerewan', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1243, 'Mansa Konko', 'GMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1244, 'Tbilisi', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1245, 'Kutaisi', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1246, 'Batumi', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1247, 'Sokhumi', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1248, 'Zugdidi', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1249, 'Rust''avi', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1250, 'P''ot''i', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1251, 'Gori', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1252, 'Ts''khinvali', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1253, 'Samtredia', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1254, 'Khashuri', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1255, 'Senak''i', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1256, 'Stantsiya Novyy Afon', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1257, 'Zestap''oni', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1258, 'Telavi', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1259, 'Ozurgeti', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1260, 'Marneuli', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1261, 'Kobuleti', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1262, 'Tqvarch''eli', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1263, 'Akhaltsikhe', 'GEO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1264, 'Berlin', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1265, 'Hamburg', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1266, 'Munich', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1267, 'Koeln', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1268, 'Frankfurt am Main', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1269, 'Essen', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1270, 'Stuttgart', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1271, 'Dortmund', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1272, 'Duesseldorf', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1273, 'Bremen', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1274, 'Hannover', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1275, 'Leipzig', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1276, 'Duisburg', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1277, 'Nuernberg', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1278, 'Dresden', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1279, 'Wandsbek', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1280, 'Bochum', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1281, 'Bochum-Hordel', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1282, 'Wuppertal', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1283, 'Bielefeld', 'DEU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1284, 'Accra', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1285, 'Kumasi', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1286, 'Tamale', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1287, 'Takoradi', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1288, 'Atsiaman', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1289, 'Tema', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1290, 'Teshi Old Town', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1291, 'Cape Coast', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1292, 'Sekondi-Takoradi', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1293, 'Obuase', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1294, 'Medina Estates', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1295, 'Koforidua', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1296, 'Japekrom', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1297, 'Wa', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1298, 'Ejura', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1299, 'Nungua', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1300, 'Sunyani', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1301, 'Ho', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1302, 'Techiman', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1303, 'Aflao', 'GHA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1304, 'Gibraltar', 'GIB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1305, 'Athens', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1306, 'Thessaloniki', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1307, 'Patra', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1308, 'Piraeus', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1309, 'Larisa', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1310, 'Peristeri', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1311, 'Irakleion', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1312, 'Kallithea', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1313, 'Acharnes', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1314, 'Kalamaria', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1315, 'Nikaia', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1316, 'Glyfada', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1317, 'Volos', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1318, 'Ilion', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1319, 'Ilioupoli', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1320, 'Keratsini', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1321, 'Khalandrion', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1322, 'Nea Smyrni', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1323, 'Marousi', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1324, 'Agios Dimitrios', 'GRC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1325, 'Nuuk', 'GRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1326, 'Sisimiut', 'GRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1327, 'Ilulissat', 'GRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1328, 'Qaqortoq', 'GRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1329, 'Aasiaat', 'GRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1330, 'Saint George''s', 'GRD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1331, 'Gouyave', 'GRD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1332, 'Grenville', 'GRD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1333, 'Victoria', 'GRD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1334, 'Saint David''s', 'GRD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1335, 'Sauteurs', 'GRD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1336, 'Hillsborough', 'GRD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1337, 'Les Abymes', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1338, 'Baie-Mahault', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1339, 'Le Gosier', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1340, 'Petit-Bourg', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1341, 'Sainte-Anne', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1342, 'Le Moule', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1343, 'Sainte-Rose', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1344, 'Capesterre-Belle-Eau', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1345, 'Pointe-a-Pitre', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1346, 'Lamentin', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1347, 'Saint-Francois', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1348, 'Basse-Terre', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1349, 'Saint-Claude', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1350, 'Trois-Rivieres', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1351, 'Gourbeyre', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1352, 'Petit-Canal', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1353, 'Pointe-Noire', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1354, 'Vieux-Habitants', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1355, 'Bouillante', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1356, 'Grand-Bourg', 'GLP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1357, 'Dededo Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1358, 'Yigo Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1359, 'Tamuning', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1360, 'Tamuning-Tumon-Harmon Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1361, 'Mangilao Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1362, 'Barrigada Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1363, 'Santa Rita Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1364, 'Mongmong-Toto-Maite Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1365, 'Chalan Pago-Ordot Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1366, 'Yona Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1367, 'Agat Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1368, 'Agana Heights Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1369, 'Talofofo Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1370, 'Inarajan Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1371, 'Sinajana Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1372, 'Merizo Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1373, 'Asan-Maina Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1374, 'Piti Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1375, 'Hagatna', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1376, 'Umatac Village', 'GUM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1377, 'Guatemala City', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1378, 'Mixco', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1379, 'Villa Nueva', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1380, 'Petapa', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1381, 'San Juan Sacatepequez', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1382, 'Quetzaltenango', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1383, 'Villa Canales', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1384, 'Escuintla', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1385, 'Chinautla', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1386, 'Chimaltenango', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1387, 'Chichicastenango', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1388, 'Huehuetenango', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1389, 'Amatitlan', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1390, 'Totonicapan', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1391, 'Santa Catarina Pinula', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1392, 'Santa Lucia Cotzumalguapa', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1393, 'Puerto Barrios', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1394, 'San Francisco El Alto', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1395, 'Coban', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1396, 'San Jose Pinula', 'GTM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1397, 'Saint Peter Port', 'GGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1398, 'St Martin', 'GGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1399, 'St. Andrew`s', 'GGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1400, 'Castel', 'GGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1401, 'Saint Saviour', 'GGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1402, 'St Anne', 'GGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1403, 'Saint Sampson', 'GGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1404, 'Torteval', 'GGY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1405, 'Camayenne', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1406, 'Conakry', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1407, 'Nzerekore', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1408, 'Kindia', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1409, 'Kankan', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1410, 'Gueckedou', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1411, 'Coyah', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1412, 'Labe', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1413, 'Kissidougou', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1414, 'Fria', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1415, 'Siguiri', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1416, 'Macenta', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1417, 'Mamou', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1418, 'Telimele', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1419, 'Tougue', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1420, 'Pita', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1421, 'Boke', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1422, 'Kouroussa', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1423, 'Koundara', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1424, 'Dabola', 'GIN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1425, 'Bissau', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1426, 'Bafata', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1427, 'Gabu', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1428, 'Bissora', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1429, 'Bolama', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1430, 'Cacheu', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1431, 'Catio', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1432, 'Bubaque', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1433, 'Mansoa', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1434, 'Buba', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1435, 'Quebo', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1436, 'Canchungo', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1437, 'Farim', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1438, 'Quinhamel', 'GNB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1439, 'Georgetown', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1440, 'Linden', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1441, 'New Amsterdam', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1442, 'Anna Regina', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1443, 'Bartica', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1444, 'Skeldon', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1445, 'Rosignol', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1446, 'Mahdia', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1447, 'Vreed-en-Hoop', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1448, 'Mabaruma', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1449, 'Lethem', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1450, 'Fort Wellington', 'GUY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1451, 'Port-au-Prince', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1452, 'Carrefour', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1453, 'Delmas 73', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1454, 'Petionville', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1455, 'Port-de-Paix', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1456, 'Croix-des-Bouquets', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1457, 'Jacmel', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1458, 'Okap', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1459, 'Leogane', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1460, 'Les Cayes', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1461, 'Tigwav', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1462, 'Jeremie', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1463, 'Miragoane', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1464, 'Gonayiv', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1465, 'Saint-Marc', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1466, 'Thomazeau', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1467, 'Grangwav', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1468, 'Verrettes', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1469, 'Kenscoff', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1470, 'Saint-Raphael', 'HTI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1471, 'Tegucigalpa', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1472, 'San Pedro Sula', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1473, 'Choloma', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1474, 'La Ceiba', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1475, 'El Progreso', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1476, 'Ciudad Choluteca', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1477, 'Comayagua', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1478, 'Puerto Cortez', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1479, 'La Lima', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1480, 'Danli', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1481, 'Siguatepeque', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1482, 'Juticalpa', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1483, 'Villanueva', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1484, 'Tocoa', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1485, 'Tela', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1486, 'Santa Rosa de Copan', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1487, 'Olanchito', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1488, 'San Lorenzo', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1489, 'Cofradia', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1490, 'El Paraiso', 'HND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1491, 'Hong Kong', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1492, 'Kowloon', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1493, 'Tsuen Wan', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1494, 'Yuen Long Kau Hui', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1495, 'Tung Chung', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1496, 'Sha Tin', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1497, 'Tuen Mun', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1498, 'Tai Po', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1499, 'Sai Kung', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1500, 'Yung Shue Wan', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1501, 'Central', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1502, 'Sham Shui Po', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1503, 'Wan Chai', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1504, 'Wong Tai Sin', 'HKG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1505, 'Budapest', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1506, 'Debrecen', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1507, 'Miskolc', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1508, 'Szeged', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1509, 'Pecs', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1510, 'Zuglo', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1511, 'Gyor', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1512, 'Nyiregyhaza', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1513, 'Kecskemet', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1514, 'Szekesfehervar', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1515, 'Szombathely', 'HUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1516, 'Reykjavik', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1517, 'Kopavogur', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1518, 'Hafnarfjoerdur', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1519, 'Akureyri', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1520, 'Gardabaer', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1521, 'Mosfellsbaer', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1522, 'Akranes', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1523, 'Selfoss', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1524, 'Isafjoerdur', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1525, 'Saudarkrokur', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1526, 'Egilsstadir', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1527, 'Borgarnes', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1528, 'Keflavik', 'ISL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1529, 'Mumbai', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1530, 'Delhi', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1531, 'Bengaluru', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1532, 'Kolkata', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1533, 'Chennai', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1534, 'Ahmedabad', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1535, 'Hyderabad', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1536, 'Pune', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1537, 'Surat', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1538, 'Kanpur', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1539, 'Jaipur', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1540, 'Navi Mumbai', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1541, 'Lucknow', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1542, 'Nagpur', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1543, 'Indore', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1544, 'Patna', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1545, 'Bhopal', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1546, 'Ludhiana', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1547, 'Tirunelveli', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1548, 'Agra', 'IND');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1549, 'Jakarta', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1550, 'Surabaya', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1551, 'Medan', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1552, 'Bandung', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1553, 'Bekasi', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1554, 'Palembang', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1555, 'Tangerang', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1556, 'Makassar', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1557, 'South Tangerang', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1558, 'Semarang', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1559, 'Depok', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1560, 'Batam', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1561, 'Padang', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1562, 'Denpasar', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1563, 'Bandar Lampung', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1564, 'Bogor', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1565, 'Malang', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1566, 'Pekanbaru', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1567, 'City of Balikpapan', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1568, 'Yogyakarta', 'IDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1569, 'Tehran', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1570, 'Mashhad', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1571, 'Isfahan', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1572, 'Karaj', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1573, 'Tabriz', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1574, 'Shiraz', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1575, 'Qom', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1576, 'Ahvaz', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1577, 'Pasragad Branch', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1578, 'Kahriz', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1579, 'Kermanshah', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1580, 'Rasht', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1581, 'Kerman', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1582, 'Orumiyeh', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1583, 'Zahedan', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1584, 'Hamadan', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1585, 'Azadshahr', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1586, 'Arak', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1587, 'Yazd', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1588, 'Ardabil', 'IRN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1589, 'Baghdad', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1590, 'Basrah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1591, 'Al Mawsil al Jadidah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1592, 'Al Basrah al Qadimah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1593, 'Mosul', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1594, 'Erbil', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1595, 'Abu Ghurayb', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1596, 'As Sulaymaniyah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1597, 'Kirkuk', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1598, 'Najaf', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1599, 'Karbala', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1600, 'Nasiriyah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1601, 'Al ''Amarah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1602, 'Ad Diwaniyah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1603, 'Al Kut', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1604, 'Al Hillah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1605, 'Dihok', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1606, 'Ramadi', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1607, 'Al Fallujah', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1608, 'Samarra''', 'IRQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1609, 'Dublin', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1610, 'Cork', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1611, 'Dun Laoghaire', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1612, 'Luimneach', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1613, 'Gaillimh', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1614, 'Tallaght', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1615, 'Waterford', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1616, 'Swords', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1617, 'Drogheda', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1618, 'Dundalk', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1619, 'Navan', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1620, 'Ennis', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1621, 'Balbriggan', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1622, 'Tralee', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1623, 'Sandyford', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1624, 'Kilkenny', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1625, 'Naas', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1626, 'Sligo', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1627, 'Carlow', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1628, 'Loch Garman', 'IRL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1629, 'Douglas', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1630, 'Ramsey', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1631, 'Peel', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1632, 'Port Erin', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1633, 'Castletown', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1634, 'Laxey', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1635, 'Andreas', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1636, 'Ballabeg', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1637, 'Ballasalla', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1638, 'Bride', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1639, 'Crosby', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1640, 'Jurby', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1641, 'Kirk Braddan', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1642, 'Kirkmichael', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1643, 'Lezayre', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1644, 'Maughold', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1645, 'Onchan', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1646, 'Patrick', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1647, 'Port Saint Mary', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1648, 'Santon', 'IMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1649, 'Jerusalem', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1650, 'Tel Aviv', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1651, 'West Jerusalem', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1652, 'Haifa', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1653, 'Ashdod', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1654, 'Rishon LeZiyyon', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1655, 'Petah Tiqwa', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1656, 'Beersheba', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1657, 'Netanya', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1658, 'Holon', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1659, 'Bnei Brak', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1660, 'Rehovot', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1661, 'Bat Yam', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1662, 'Ramat Gan', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1663, 'Ashkelon', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1664, 'Jaffa', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1665, 'Modi''in Makkabbim Re''ut', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1666, 'Herzliya', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1667, 'Kfar Saba', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1668, 'Ra''anana', 'ISR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1669, 'Rome', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1670, 'Milan', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1671, 'Naples', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1672, 'Turin', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1673, 'Palermo', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1674, 'Genoa', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1675, 'Bologna', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1676, 'Florence', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1677, 'Catania', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1678, 'Bari', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1679, 'Messina', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1680, 'Verona', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1681, 'Padova', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1682, 'Trieste', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1683, 'Brescia', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1684, 'Prato', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1685, 'Taranto', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1686, 'Reggio Calabria', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1687, 'Modena', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1688, 'Livorno', 'ITA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1689, 'Abidjan', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1690, 'Abobo', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1691, 'Bouake', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1692, 'Daloa', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1693, 'San-Pedro', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1694, 'Yamoussoukro', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1695, 'Korhogo', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1696, 'Man', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1697, 'Divo', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1698, 'Gagnoa', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1699, 'Abengourou', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1700, 'Anyama', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1701, 'Agboville', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1702, 'Grand-Bassam', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1703, 'Dabou', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1704, 'Dimbokro', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1705, 'Ferkessedougou', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1706, 'Adzope', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1707, 'Bouafle', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1708, 'Sinfra', 'CIV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1709, 'Kingston', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1710, 'New Kingston', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1711, 'Spanish Town', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1712, 'Portmore', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1713, 'Montego Bay', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1714, 'Mandeville', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1715, 'May Pen', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1716, 'Old Harbour', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1717, 'Linstead', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1718, 'Half Way Tree', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1719, 'Savanna-la-Mar', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1720, 'Port Antonio', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1721, 'Saint Ann''s Bay', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1722, 'Bog Walk', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1723, 'Constant Spring', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1724, 'Ewarton', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1725, 'Hayes', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1726, 'Ocho Rios', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1727, 'Morant Bay', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1728, 'Stony Hill', 'JAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1729, 'Tokyo', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1730, 'Yokohama', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1731, 'Osaka', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1732, 'Nagoya', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1733, 'Sapporo', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1734, 'Kobe', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1735, 'Kyoto', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1736, 'Fukuoka', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1737, 'Kawasaki', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1738, 'Saitama', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1739, 'Hiroshima', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1740, 'Yono', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1741, 'Sendai', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1742, 'Kitakyushu', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1743, 'Chiba', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1744, 'Sakai', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1745, 'Shizuoka', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1746, 'Kumamoto', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1747, 'Okayama', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1748, 'Hamamatsu', 'JPN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1749, 'Saint Helier', 'JEY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1750, 'Le Hocq', 'JEY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1751, 'Amman', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1752, 'Zarqa', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1753, 'Irbid', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1754, 'Russeifa', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1755, 'Wadi as Sir', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1756, '''Ajlun', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1757, 'Aqaba', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1758, 'Rukban', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1759, 'Madaba', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1760, 'As Salt', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1761, 'Ar Ramtha', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1762, 'Mafraq', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1763, 'Ma''an', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1764, 'Al Jubayhah', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1765, 'Sahab', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1766, 'Hayy al Quwaysimah', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1767, 'Jarash', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1768, 'At Tafilah', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1769, '`Izra', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1770, 'Qir Moav', 'JOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1771, 'Almaty', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1772, 'Karagandy', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1773, 'Shymkent', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1774, 'Taraz', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1775, 'Astana', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1776, 'Pavlodar', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1777, 'Ust-Kamenogorsk', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1778, 'Kyzyl-Orda', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1779, 'Kyzylorda', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1780, 'Semey', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1781, 'Aktobe', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1782, 'Kostanay', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1783, 'Petropavl', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1784, 'Oral', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1785, 'Atyrau', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1786, 'Temirtau', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1787, 'Aktau', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1788, 'Kokshetau', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1789, 'Rudnyy', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1790, 'Ekibastuz', 'KAZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1791, 'Nairobi', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1792, 'Mombasa', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1793, 'Nakuru', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1794, 'Eldoret', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1795, 'Kisumu', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1796, 'Thika', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1797, 'Malindi', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1798, 'Kitale', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1799, 'Garissa', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1800, 'Kakamega', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1801, 'Kapenguria', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1802, 'Bungoma', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1803, 'Busia', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1804, 'Nyeri', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1805, 'Ol Kalou', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1806, 'Meru', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1807, 'Kilifi', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1808, 'Wajir', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1809, 'Mumias', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1810, 'Voi', 'KEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1811, 'Tarawa', 'KIR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1812, 'Betio Village', 'KIR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1813, 'Bikenibeu Village', 'KIR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1814, 'Al Ahmadi', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1815, 'Hawalli', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1816, 'As Salimiyah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1817, 'Sabah as Salim', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1818, 'Al Farwaniyah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1819, 'Al Fahahil', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1820, 'Kuwait City', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1821, 'Ar Rumaythiyah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1822, 'Ar Riqqah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1823, 'Salwa', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1824, 'Al Manqaf', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1825, 'Ar Rabiyah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1826, 'Bayan', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1827, 'Al Jahra''', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1828, 'Al Fintas', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1829, 'Janub as Surrah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1830, 'Al Mahbulah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1831, 'Ad Dasmah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1832, 'Ash Shamiyah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1833, 'Al Wafrah', 'KWT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1834, 'Bishkek', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1835, 'Osh', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1836, 'Jalal-Abad', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1837, 'Karakol', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1838, 'Tokmok', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1839, 'Kara-Balta', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1840, 'Naryn', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1841, 'Uzgen', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1842, 'Balykchy', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1843, 'Talas', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1844, 'Kyzyl-Kyya', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1845, 'Bazar-Korgon', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1846, 'Iradan', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1847, 'Tash-Kumyr', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1848, 'Kant', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1849, 'Toktogul', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1850, 'Cholpon-Ata', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1851, 'Kara Suu', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1852, 'Isfana', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1853, 'Kyzyl-Suu', 'KGZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1854, 'Vientiane', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1855, 'Pakse', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1856, 'Thakhek', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1857, 'Savannakhet', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1858, 'Luang Prabang', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1859, 'Xam Nua', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1860, 'Muang Phonsavan', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1861, 'Vangviang', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1862, 'Muang Xay', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1863, 'Muang Pakxan', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1864, 'Ban Houakhoua', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1865, 'Muang Khong', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1866, 'Sainyabuli', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1867, 'Phongsali', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1868, 'Champasak', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1869, 'Ban Houayxay', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1870, 'Muang Phon-Hong', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1871, 'Salavan', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1872, 'Lamam', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1873, 'Attapeu', 'LAO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1874, 'Riga', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1875, 'Daugavpils', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1876, 'Liepaja', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1877, 'Jelgava', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1878, 'Jurmala', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1879, 'Ventspils', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1880, 'Rezekne', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1881, 'Jekabpils', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1882, 'Valmiera', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1883, 'Ogre', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1884, 'Tukums', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1885, 'Cesis', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1886, 'Salaspils', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1887, 'Bolderaja', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1888, 'Kuldiga', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1889, 'Olaine', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1890, 'Saldus', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1891, 'Talsi', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1892, 'Dobele', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1893, 'Kraslava', 'LVA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1894, 'Beirut', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1895, 'Ra''s Bayrut', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1896, 'Tripoli', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1897, 'Sidon', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1898, 'Tyre', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1899, 'Nabatiye et Tahta', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1900, 'Habbouch', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1901, 'Jounieh', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1902, 'Zahle', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1903, 'Baalbek', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1904, 'En Naqoura', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1905, 'Jbail', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1906, 'Bcharre', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1907, 'Batroun', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1908, 'Baabda', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1909, 'Halba', 'LBN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1910, 'Maseru', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1911, 'Mafeteng', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1912, 'Leribe', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1913, 'Maputsoe', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1914, 'Mohale''s Hoek', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1915, 'Qacha''s Nek', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1916, 'Quthing', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1917, 'Butha-Buthe', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1918, 'Nako', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1919, 'Mokhotlong', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1920, 'Thaba-Tseka', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1921, 'Teyateyaneng', 'LSO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1922, 'Monrovia', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1923, 'Gbarnga', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1924, 'Kakata', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1925, 'Bensonville', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1926, 'Harper', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1927, 'Voinjama', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1928, 'Buchanan', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1929, 'Zwedru', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1930, 'New Yekepa', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1931, 'Greenville', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1932, 'Ganta', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1933, 'Robertsport', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1934, 'Sanniquellie', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1935, 'Fish Town', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1936, 'Tubmanburg', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1937, 'Bopolu', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1938, 'Barclayville', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1939, 'Cestos City', 'LBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1940, 'Tripoli', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1941, 'Benghazi', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1942, 'Misratah', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1943, 'Tarhuna', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1944, 'Al Khums', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1945, 'Az Zawiyah', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1946, 'Zawiya', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1947, 'Ajdabiya', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1948, 'Al Ajaylat', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1949, 'Sabha', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1950, 'Sirte', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1951, 'Al Jadid', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1952, 'Tobruk', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1953, 'Zliten', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1954, 'Sabratah', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1955, 'Tagiura', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1956, 'Al Marj', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1957, 'Gharyan', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1958, 'Darnah', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1959, 'Al Bayda''', 'LBY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1960, 'Schaan', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1961, 'Vaduz', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1962, 'Triesen', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1963, 'Balzers', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1964, 'Eschen', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1965, 'Mauren', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1966, 'Triesenberg', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1967, 'Ruggell', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1968, 'Gamprin', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1969, 'Schellenberg', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1970, 'Planken', 'LIE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1971, 'Vilnius', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1972, 'Kaunas', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1973, 'Klaipeda', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1974, 'Siauliai', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1975, 'Panevezys', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1976, 'Alytus', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1977, 'Dainava (Kaunas)', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1978, 'Eiguliai', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1979, 'Marijampole', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1980, 'Mazeikiai', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1981, 'Silainiai', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1982, 'Fabijoniskes', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1983, 'Jonava', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1984, 'Utena', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1985, 'Pasilaiciai', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1986, 'Kedainiai', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1987, 'Seskine', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1988, 'Lazdynai', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1989, 'Telsiai', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1990, 'Visaginas', 'LTU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1991, 'Luxembourg', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1992, 'Esch-sur-Alzette', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1993, 'Dudelange', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1994, 'Schifflange', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1995, 'Bettembourg', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1996, 'Petange', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1997, 'Ettelbruck', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1998, 'Diekirch', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (1999, 'Strassen', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2000, 'Bertrange', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2001, 'Belvaux', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2002, 'Differdange', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2003, 'Mamer', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2004, 'Wiltz', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2005, 'Grevenmacher', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2006, 'Mersch', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2007, 'Redange-sur-Attert', 'LUX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2008, 'Macau', 'MAC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2009, 'Skopje', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2010, 'Bitola', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2011, 'Kumanovo', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2012, 'Prilep', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2013, 'Tetovo', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2014, 'Cair', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2015, 'Kisela Voda', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2016, 'Veles', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2017, 'Ohrid', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2018, 'Gostivar', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2019, 'Shtip', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2020, 'Strumica', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2021, 'Centar Zupa', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2022, 'Gjorce Petro', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2023, 'Kavadarci', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2024, 'Struga', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2025, 'Butel', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2026, 'Kochani', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2027, 'Kicevo', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2028, 'Lipkovo', 'MKD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2029, 'Antananarivo', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2030, 'Toamasina', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2031, 'Antsirabe', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2032, 'Fianarantsoa', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2033, 'Mahajanga', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2034, 'Toliara', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2035, 'Antsiranana', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2036, 'Antanifotsy', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2037, 'Ambovombe', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2038, 'Ambilobe', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2039, 'Amparafaravola', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2040, 'Tolanaro', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2041, 'Ambatondrazaka', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2042, 'Mananara', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2043, 'Soavinandriana', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2044, 'Mahanoro', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2045, 'Soanierana Ivongo', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2046, 'Faratsiho', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2047, 'Nosy Varika', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2048, 'Vavatenina', 'MDG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2049, 'Lilongwe', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2050, 'Blantyre', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2051, 'Mzuzu', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2052, 'Zomba', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2053, 'Kasungu', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2054, 'Mangochi', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2055, 'Karonga', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2056, 'Salima', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2057, 'Nkhotakota', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2058, 'Liwonde', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2059, 'Nsanje', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2060, 'Rumphi', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2061, 'Mzimba', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2062, 'Balaka', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2063, 'Mchinji', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2064, 'Mulanje', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2065, 'Dedza', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2066, 'Luchenza', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2067, 'Nkhata Bay', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2068, 'Monkey Bay', 'MWI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2069, 'Kuala Lumpur', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2070, 'Klang', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2071, 'Kampung Baru Subang', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2072, 'Johor Bahru', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2073, 'Subang Jaya', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2074, 'Ipoh', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2075, 'Kuching', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2076, 'Petaling Jaya', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2077, 'Shah Alam', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2078, 'Kota Kinabalu', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2079, 'Sandakan', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2080, 'Seremban', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2081, 'Kuantan', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2082, 'Kota Bharu', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2083, 'Tawau', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2084, 'George Town', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2085, 'Kuala Terengganu', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2086, 'Sungai Petani', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2087, 'Miri', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2088, 'Taiping', 'MYS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2089, 'Male', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2090, 'Fuvahmulah', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2091, 'Hithadhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2092, 'Kulhudhuffushi', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2093, 'Thinadhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2094, 'Naifaru', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2095, 'Dhidhdhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2096, 'Viligili', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2097, 'Funadhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2098, 'Eydhafushi', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2099, 'Mahibadhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2100, 'Fonadhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2101, 'Manadhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2102, 'Ugoofaaru', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2103, 'Kudahuvadhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2104, 'Veymandoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2105, 'Muli', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2106, 'Felidhoo', 'MDV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2107, 'Bamako', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2108, 'Sikasso', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2109, 'Mopti', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2110, 'Koutiala', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2111, 'Segou', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2112, 'Gao', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2113, 'Kayes', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2114, 'Markala', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2115, 'Kolokani', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2116, 'Kati', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2117, 'Bougouni', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2118, 'Timbuktu', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2119, 'Banamba', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2120, 'Bafoulabe', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2121, 'San', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2122, 'Koulikoro', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2123, 'Djenne', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2124, 'Yorosso', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2125, 'Kangaba', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2126, 'Sagalo', 'MLI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2127, 'Birkirkara', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2128, 'Qormi', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2129, 'Mosta', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2130, 'Zabbar', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2131, 'San Pawl il-Bahar', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2132, 'Saint John', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2133, 'Fgura', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2134, 'Zejtun', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2135, 'Sliema', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2136, 'Haz-Zebbug', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2137, 'Hamrun', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2138, 'Naxxar', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2139, 'Marsaskala', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2140, 'Attard', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2141, 'Paola', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2142, 'Zurrieq', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2143, 'Birzebbuga', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2144, 'Tarxien', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2145, 'Siggiewi', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2146, 'Gzira', 'MLT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2147, 'Majuro', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2148, 'Ebaye', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2149, 'Arno', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2150, 'Jabor', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2151, 'Wotje', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2152, 'Mili', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2153, 'Namdrik', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2154, 'Ebon', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2155, 'Kili', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2156, 'Likiep', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2157, 'Ailuk', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2158, 'Ujae', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2159, 'Aur', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2160, 'Utrik', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2161, 'Lae', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2162, 'Mejit', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2163, 'Wotho', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2164, 'Lib', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2165, 'Jabat', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2166, 'Rongelap', 'MHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2167, 'Fort-de-France', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2168, 'Le Lamentin', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2169, 'Le Robert', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2170, 'Sainte-Marie', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2171, 'Le Francois', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2172, 'Ducos', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2173, 'Saint-Joseph', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2174, 'La Trinite', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2175, 'Riviere-Pilote', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2176, 'Le Gros-Morne', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2177, 'Sainte-Luce', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2178, 'Saint-Esprit', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2179, 'Le Lorrain', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2180, 'Le Marin', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2181, 'Le Vauclin', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2182, 'Les Trois-Ilets', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2183, 'Le Morne-Rouge', 'MTQ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2184, 'Nouakchott', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2185, 'Nouadhibou', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2186, 'Nema', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2187, 'Kaedi', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2188, 'Rosso', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2189, 'Kiffa', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2190, 'Zouerate', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2191, 'Atar', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2192, 'Tekane', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2193, 'Selibaby', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2194, 'Aleg', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2195, 'Aioun', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2196, 'Akjoujt', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2197, 'Tidjikja', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2198, 'Dar Naim', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2199, 'Tevragh Zeina', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2200, 'Arafat', 'MRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2201, 'Port Louis', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2202, 'Beau Bassin-Rose Hill', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2203, 'Vacoas', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2204, 'Curepipe', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2205, 'Quatre Bornes', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2206, 'Triolet', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2207, 'Goodlands', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2208, 'Centre de Flacq', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2209, 'Bel Air Riviere Seche', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2210, 'Mahebourg', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2211, 'Saint Pierre', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2212, 'Bambous', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2213, 'Le Hochet', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2214, 'Rose Belle', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2215, 'Chemin Grenier', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2216, 'Riviere du Rempart', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2217, 'Grand Baie', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2218, 'Plaine Magnien', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2219, 'Pailles', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2220, 'Surinam', 'MUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2221, 'Mamoudzou', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2222, 'Koungou', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2223, 'Dzaoudzi', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2224, 'Dembeni', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2225, 'Sada', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2226, 'Pamandzi', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2227, 'Bandraboua', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2228, 'Mtsamboro', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2229, 'Tsingoni', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2230, 'Ouangani', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2231, 'Chiconi', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2232, 'Bandrele', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2233, 'Chirongui', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2234, 'Boueni', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2235, 'M''Tsangamouji', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2236, 'Kani Keli', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2237, 'Acoua', 'MYT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2238, 'Mexico City', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2239, 'Iztapalapa', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2240, 'Ecatepec de Morelos', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2241, 'Guadalajara', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2242, 'Puebla', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2243, 'Juarez', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2244, 'Tijuana', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2245, 'Leon de los Aldama', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2246, 'Gustavo Adolfo Madero', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2247, 'Zapopan', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2248, 'Monterrey', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2249, 'Ciudad Nezahualcoyotl', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2250, 'Chihuahua', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2251, 'Naucalpan de Juarez', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2252, 'Merida', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2253, 'Alvaro Obregon', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2254, 'San Luis Potosi', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2255, 'Aguascalientes', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2256, 'Hermosillo', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2257, 'Saltillo', 'MEX');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2258, 'Weno', 'FSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2259, 'Tofol', 'FSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2260, 'Colonia', 'FSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2261, 'Kolonia', 'FSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2262, 'Kolonia Town', 'FSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2263, 'Chisinau', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2264, 'Tiraspol', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2265, 'Balti', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2266, 'Bender', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2267, 'Ribnita', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2268, 'Cahul', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2269, 'Ungheni', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2270, 'Soroca', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2271, 'Orhei', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2272, 'Dubasari', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2273, 'Comrat', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2274, 'Edinet', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2275, 'Ceadir-Lunga', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2276, 'Causeni', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2277, 'Straseni', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2278, 'Hincesti', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2279, 'Floresti', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2280, 'Drochia', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2281, 'Bilicenii Vechi', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2282, 'Slobozia', 'MDA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2283, 'Monaco', 'MCO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2284, 'Monte-Carlo', 'MCO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2285, 'La Condamine', 'MCO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2286, 'Ulan Bator', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2287, 'Erdenet', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2288, 'Darhan', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2289, 'Khovd', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2290, 'OElgii', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2291, 'Ulaangom', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2292, 'Hovd', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2293, 'Murun-kuren', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2294, 'Bayanhongor', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2295, 'Arvayheer', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2296, 'Suhbaatar', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2297, 'Saynshand', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2298, 'Dzuunharaa', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2299, 'Zuunmod', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2300, 'Bulgan', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2301, 'Uliastay', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2302, 'Baruun-Urt', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2303, 'Altai', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2304, 'Mandalgovi', 'MNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2305, 'Podgorica', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2306, 'Niksic', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2307, 'Herceg-Novi', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2308, 'Pljevlja', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2309, 'Budva', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2310, 'Bar', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2311, 'Bijelo Polje', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2312, 'Cetinje', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2313, 'Berane', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2314, 'Ulcinj', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2315, 'Rozaje', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2316, 'Tivat', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2317, 'Dobrota', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2318, 'Kotor', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2319, 'Danilovgrad', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2320, 'Mojkovac', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2321, 'Plav', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2322, 'Kolasin', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2323, 'Zabljak', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2324, 'Pluzine', 'MNE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2325, 'Brades', 'MSR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2326, 'Plymouth', 'MSR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2327, 'Saint Peters', 'MSR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2328, 'Casablanca', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2329, 'Rabat', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2330, 'Fes', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2331, 'Sale', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2332, 'Marrakesh', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2333, 'Agadir', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2334, 'Tangier', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2335, 'Meknes', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2336, 'Oujda-Angad', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2337, 'Al Hoceima', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2338, 'Kenitra', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2339, 'Tetouan', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2340, 'Temara', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2341, 'Safi', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2342, 'Mohammedia', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2343, 'Khouribga', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2344, 'Beni Mellal', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2345, 'Fes al Bali', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2346, 'El Jadid', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2347, 'Taza', 'MAR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2348, 'Maputo', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2349, 'Matola', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2350, 'Beira', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2351, 'Nampula', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2352, 'Chimoio', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2353, 'Nacala', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2354, 'Quelimane', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2355, 'Tete', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2356, 'Xai-Xai', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2357, 'Maxixe', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2358, 'Mandimba', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2359, 'Ressano Garcia', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2360, 'Lichinga', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2361, 'Pemba', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2362, 'Dondo', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2363, 'Antonio Enes', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2364, 'Inhambane', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2365, 'Cuamba', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2366, 'Montepuez', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2367, 'Chokwe', 'MOZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2368, 'Yangon', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2369, 'Mandalay', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2370, 'Nay Pyi Taw', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2371, 'Mawlamyine', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2372, 'Kyain Seikgyi Township', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2373, 'Bago', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2374, 'Pathein', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2375, 'Monywa', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2376, 'Sittwe', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2377, 'Meiktila', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2378, 'Myeik', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2379, 'Taunggyi', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2380, 'Myingyan', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2381, 'Dawei', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2382, 'Pyay', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2383, 'Hinthada', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2384, 'Lashio', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2385, 'Pakokku', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2386, 'Thaton', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2387, 'Pyin Oo Lwin', 'MMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2388, 'Windhoek', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2389, 'Rundu', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2390, 'Walvis Bay', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2391, 'Oshakati', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2392, 'Swakopmund', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2393, 'Katima Mulilo', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2394, 'Grootfontein', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2395, 'Rehoboth', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2396, 'Katutura', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2397, 'Otjiwarongo', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2398, 'Okahandja', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2399, 'Gobabis', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2400, 'Keetmanshoop', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2401, 'Luderitz', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2402, 'Mariental', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2403, 'Tsumeb', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2404, 'Khorixas', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2405, 'Omaruru', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2406, 'Bethanie', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2407, 'Ongwediva', 'NAM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2408, 'Yaren', 'NRU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2409, 'Baiti', 'NRU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2410, 'Anabar', 'NRU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2411, 'Uaboe', 'NRU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2412, 'Ijuw', 'NRU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2413, 'Anibare', 'NRU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2414, 'Yangor', 'NRU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2415, 'Kathmandu', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2416, 'Pokhara', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2417, 'Patan', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2418, 'Biratnagar', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2419, 'Birganj', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2420, 'Dharan', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2421, 'Bharatpur', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2422, 'Janakpur', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2423, 'Dhangadhi', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2424, 'Butwal', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2425, 'Mahendranagar', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2426, 'Hetauda', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2427, 'Madhyapur Thimi', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2428, 'Triyuga', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2429, 'Inaruwa', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2430, 'Nepalgunj', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2431, 'Siddharthanagar', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2432, 'Gulariya', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2433, 'Titahari', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2434, 'Panauti', 'NPL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2435, 'Amsterdam', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2436, 'Rotterdam', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2437, 'The Hague', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2438, 'Utrecht', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2439, 'Eindhoven', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2440, 'Tilburg', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2441, 'Groningen', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2442, 'Almere Stad', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2443, 'Breda', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2444, 'Nijmegen', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2445, 'Enschede', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2446, 'Haarlem', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2447, 'Arnhem', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2448, 'Zaanstad', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2449, 'Amersfoort', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2450, 'Apeldoorn', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2451, '''s-Hertogenbosch', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2452, 'Hoofddorp', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2453, 'Maastricht', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2454, 'Leiden', 'NLD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2455, 'Noumea', 'NCL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2456, 'Mont-Dore', 'NCL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2457, 'Dumbea', 'NCL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2458, 'Paita', 'NCL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2459, 'We', 'NCL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2460, 'Tadine', 'NCL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2461, 'Kone', 'NCL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2462, 'La Foa', 'NCL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2463, 'Auckland', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2464, 'Wellington', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2465, 'Christchurch', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2466, 'Manukau City', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2467, 'Waitakere', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2468, 'North Shore', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2469, 'Hamilton', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2470, 'Dunedin', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2471, 'Tauranga', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2472, 'Lower Hutt', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2473, 'Palmerston North', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2474, 'Rotorua', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2475, 'Hastings', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2476, 'Nelson', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2477, 'Napier', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2478, 'Mangere', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2479, 'Porirua', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2480, 'Whangarei', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2481, 'New Plymouth', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2482, 'Invercargill', 'NZL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2483, 'Managua', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2484, 'Leon', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2485, 'Masaya', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2486, 'Chinandega', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2487, 'Matagalpa', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2488, 'Esteli', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2489, 'Granada', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2490, 'Jinotega', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2491, 'El Viejo', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2492, 'Nueva Guinea', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2493, 'Ciudad Sandino', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2494, 'Juigalpa', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2495, 'Tipitapa', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2496, 'Bluefields', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2497, 'Diriamba', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2498, 'Ocotal', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2499, 'Puerto Cabezas', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2500, 'Chichigalpa', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2501, 'Rivas', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2502, 'San Rafael del Sur', 'NIC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2503, 'Niamey', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2504, 'Zinder', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2505, 'Maradi', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2506, 'Agadez', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2507, 'Alaghsas', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2508, 'Tahoua', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2509, 'Dosso', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2510, 'Birni N Konni', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2511, 'Tessaoua', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2512, 'Gaya', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2513, 'Dogondoutchi', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2514, 'Diffa', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2515, 'Ayorou', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2516, 'Madaoua', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2517, 'Mayahi', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2518, 'Tera', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2519, 'Mirriah', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2520, 'Tibiri', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2521, 'Dakoro', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2522, 'Magaria', 'NER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2523, 'Lagos', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2524, 'Kano', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2525, 'Ibadan', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2526, 'Kaduna', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2527, 'Port Harcourt', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2528, 'Benin City', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2529, 'Maiduguri', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2530, 'Zaria', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2531, 'Aba', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2532, 'Jos', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2533, 'Ilorin', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2534, 'Oyo', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2535, 'Enugu', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2536, 'Abeokuta', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2537, 'Abuja', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2538, 'Sokoto', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2539, 'Onitsha', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2540, 'Warri', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2541, 'Ebute Ikorodu', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2542, 'Okene', 'NGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2543, 'Alofi', 'NIU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2544, 'Pyongyang', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2545, 'Hamhung', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2546, 'Namp''o', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2547, 'Sunch''on', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2548, 'Hungnam', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2549, 'Kaesong', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2550, 'Wonsan', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2551, 'Chongjin', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2552, 'Sariwon', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2553, 'Sinuiju', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2554, 'Haeju', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2555, 'Kanggye', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2556, 'Hyesan', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2557, 'Songnim', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2558, 'Manp''o', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2559, 'P''yongsong', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2560, 'Hyesan-dong', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2561, 'Yuktae-dong', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2562, 'Hongwon', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2563, 'Rajin', 'PRK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2564, 'Saipan', 'MNP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2565, 'San Jose Village', 'MNP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2566, 'Oslo', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2567, 'Bergen', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2568, 'Trondheim', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2569, 'Stavanger', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2570, 'Drammen', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2571, 'Fredrikstad', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2572, 'Kristiansand', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2573, 'Sandnes', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2574, 'Tromso', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2575, 'Sarpsborg', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2576, 'Skien', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2577, 'Alesund', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2578, 'Sandefjord', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2579, 'Haugesund', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2580, 'Tonsberg', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2581, 'Moss', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2582, 'Porsgrunn', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2583, 'Bodo', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2584, 'Arendal', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2585, 'Hamar', 'NOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2586, 'Muscat', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2587, 'Seeb', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2588, 'Salalah', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2589, 'Bawshar', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2590, 'Sohar', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2591, 'As Suwayq', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2592, '`Ibri', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2593, 'Saham', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2594, 'Barka''', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2595, 'Rustaq', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2596, 'Al Buraymi', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2597, 'Nizwa', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2598, 'Sur', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2599, 'Bahla''', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2600, 'Al Khaburah', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2601, 'Shinas', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2602, 'Sufalat Sama''il', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2603, 'Izki', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2604, 'Liwa', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2605, 'Ibra''', 'OMN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2606, 'Karachi', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2607, 'Lahore', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2608, 'Faisalabad', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2609, 'Rawalpindi', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2610, 'Multan', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2611, 'Hyderabad', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2612, 'Gujranwala', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2613, 'Peshawar', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2614, 'Rahim Yar Khan', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2615, 'Quetta', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2616, 'Muzaffarabad', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2617, 'Battagram', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2618, 'Kotli', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2619, 'Islamabad', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2620, 'Bahawalpur', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2621, 'Sargodha', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2622, 'Sialkot', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2623, 'Sukkur', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2624, 'Larkana', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2625, 'Shekhupura', 'PAK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2626, 'Koror', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2627, 'Koror Town', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2628, 'Kloulklubed', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2629, 'Ulimang', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2630, 'Mengellang', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2631, 'Ngchesar Hamlet', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2632, 'Melekeok Village', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2633, 'Ngchemiangel', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2634, 'Ngerkeai', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2635, 'Ngardmau', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2636, 'Kayangel', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2637, 'Angaur State', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2638, 'Imeong Hamlet', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2639, 'Ngetkib', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2640, 'Tobi Village', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2641, 'Sonsorol Village', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2642, 'Ngerulmud', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2643, 'Ngereklmadel', 'PLW');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2644, 'East Jerusalem', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2645, 'Gaza', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2646, 'Khan Yunis', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2647, 'Jabalya', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2648, 'Hebron', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2649, 'Nablus', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2650, 'Rafah', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2651, 'Dayr al Balah', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2652, 'Bayt Lahya', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2653, 'Tulkarm', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2654, 'Qalqilyah', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2655, 'Yuta', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2656, 'Al Birah', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2657, 'Bayt Hanun', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2658, 'An Nusayrat', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2659, 'Old City', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2660, 'Al Burayj', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2661, 'Janin', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2662, 'Bani Suhayla', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2663, 'Bethlehem', 'PSE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2664, 'Panama', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2665, 'San Miguelito', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2666, 'Juan Diaz', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2667, 'David', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2668, 'Arraijan', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2669, 'Colon', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2670, 'Las Cumbres', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2671, 'La Chorrera', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2672, 'Pedregal', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2673, 'Tocumen', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2674, 'Santiago de Veraguas', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2675, 'Parque Lefevre', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2676, 'Chilibre', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2677, 'Cativa', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2678, 'Rio Abajo', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2679, 'Nuevo Belen', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2680, 'Ancon', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2681, 'Alcalde Diaz', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2682, 'El Chorrillo', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2683, 'Changuinola', 'PAN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2684, 'Port Moresby', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2685, 'Lae', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2686, 'Arawa', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2687, 'Mount Hagen', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2688, 'Popondetta', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2689, 'Madang', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2690, 'Kokopo', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2691, 'Mendi', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2692, 'Kimbe', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2693, 'Goroka', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2694, 'Wewak', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2695, 'Bulolo', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2696, 'Daru', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2697, 'Wau', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2698, 'Kavieng', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2699, 'Kiunga', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2700, 'Vanimo', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2701, 'Alotau', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2702, 'Kundiawa', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2703, 'Kainantu', 'PNG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2704, 'Asuncion', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2705, 'Ciudad del Este', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2706, 'San Lorenzo', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2707, 'Capiata', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2708, 'Lambare', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2709, 'Fernando de la Mora', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2710, 'Limpio', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2711, 'Nemby', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2712, 'Pedro Juan Caballero', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2713, 'Encarnacion', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2714, 'Mariano Roque Alonso', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2715, 'Itaugua', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2716, 'Villa Elisa', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2717, 'Villa Hayes', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2718, 'San Antonio', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2719, 'Caaguazu', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2720, 'Presidente Franco', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2721, 'Coronel Oviedo', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2722, 'Concepcion', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2723, 'Villarrica', 'PRY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2724, 'Lima', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2725, 'Arequipa', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2726, 'Callao', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2727, 'Trujillo', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2728, 'Chiclayo', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2729, 'Iquitos', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2730, 'Huancayo', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2731, 'Piura', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2732, 'Chimbote', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2733, 'Cusco', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2734, 'Pucallpa', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2735, 'Tacna', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2736, 'Santiago de Surco', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2737, 'Ica', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2738, 'Juliaca', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2739, 'Sullana', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2740, 'Chincha Alta', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2741, 'Huanuco', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2742, 'Ayacucho', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2743, 'Cajamarca', 'PER');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2744, 'Quezon City', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2745, 'Manila', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2746, 'Caloocan City', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2747, 'Budta', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2748, 'Davao', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2749, 'Malingao', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2750, 'Cebu City', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2751, 'General Santos', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2752, 'Taguig', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2753, 'Pasig City', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2754, 'Las Pinas', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2755, 'Antipolo', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2756, 'Makati City', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2757, 'Zamboanga', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2758, 'Bacolod City', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2759, 'Mansilingan', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2760, 'Cagayan de Oro', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2761, 'Dasmarinas', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2762, 'Pasay', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2763, 'Iloilo', 'PHL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2764, 'Warsaw', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2765, 'Lodz', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2766, 'Krakow', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2767, 'Wroclaw', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2768, 'Poznan', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2769, 'Gdansk', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2770, 'Szczecin', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2771, 'Bydgoszcz', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2772, 'Lublin', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2773, 'Katowice', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2774, 'Bialystok', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2775, 'Gdynia', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2776, 'Czestochowa', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2777, 'Sosnowiec', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2778, 'Radom', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2779, 'Mokotow', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2780, 'Torun', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2781, 'Kielce', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2782, 'Gliwice', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2783, 'Zabrze', 'POL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2784, 'Lisbon', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2785, 'Porto', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2786, 'Amadora', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2787, 'Braga', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2788, 'Setubal', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2789, 'Coimbra', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2790, 'Queluz', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2791, 'Funchal', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2792, 'Cacem', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2793, 'Vila Nova de Gaia', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2794, 'Algueirao', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2795, 'Loures', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2796, 'Felgueiras', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2797, 'Evora', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2798, 'Rio de Mouro', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2799, 'Odivelas', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2800, 'Aveiro', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2801, 'Amora', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2802, 'Corroios', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2803, 'Barreiro', 'PRT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2804, 'San Juan', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2805, 'Bayamon', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2806, 'Carolina', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2807, 'Ponce', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2808, 'Caguas', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2809, 'Guaynabo', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2810, 'Mayagueez', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2811, 'Trujillo Alto', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2812, 'Arecibo', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2813, 'Fajardo', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2814, 'Levittown', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2815, 'Vega Baja', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2816, 'Catano', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2817, 'Barceloneta', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2818, 'Guayama', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2819, 'Humacao', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2820, 'Yauco', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2821, 'Cayey', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2822, 'Candelaria', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2823, 'Manati', 'PRI');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2824, 'Doha', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2825, 'Ar Rayyan', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2826, 'Umm Salal Muhammad', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2827, 'Al Wakrah', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2828, 'Al Khawr', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2829, 'Ash Shihaniyah', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2830, 'Dukhan', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2831, 'Musay''id', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2832, 'Madinat ash Shamal', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2833, 'Al Wukayr', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2834, 'Az Za`ayin', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2835, 'Umm Salal `Ali', 'QAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2836, 'Brazzaville', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2837, 'Pointe-Noire', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2838, 'Dolisie', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2839, 'Kayes', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2840, 'Owando', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2841, 'Ouesso', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2842, 'Loandjili', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2843, 'Madingou', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2844, 'Gamboma', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2845, 'Impfondo', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2846, 'Sibiti', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2847, 'Mossendjo', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2848, 'Kinkala', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2849, 'Makoua', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2850, 'Djambala', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2851, 'Ewo', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2852, 'Loango', 'COG');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2853, 'Saint-Denis', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2854, 'Saint-Paul', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2855, 'Saint-Pierre', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2856, 'Le Tampon', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2857, 'Saint-Andre', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2858, 'Saint-Louis', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2859, 'Le Port', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2860, 'Saint-Benoit', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2861, 'Saint-Joseph', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2862, 'Sainte-Marie', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2863, 'Piton Saint-Leu', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2864, 'Saint-Leu', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2865, 'La Possession', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2866, 'Sainte-Suzanne', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2867, 'Petite-Ile', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2868, 'Bras-Panon', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2869, 'Les Avirons', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2870, 'Salazie', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2871, 'Les Trois-Bassins', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2872, 'Sainte-Rose', 'REU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2873, 'Bucharest', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2874, 'Iasi', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2875, 'Cluj-Napoca', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2876, 'Timisoara', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2877, 'Craiova', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2878, 'Constanta', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2879, 'Galati', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2880, 'Brasov', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2881, 'Ploiesti', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2882, 'Braila', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2883, 'Oradea', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2884, 'Bacau', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2885, 'Arad', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2886, 'Pitesti', 'ROU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2887, 'Moscow', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2888, 'Saint Petersburg', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2889, 'Novosibirsk', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2890, 'Yekaterinburg', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2891, 'Nizhniy Novgorod', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2892, 'Samara', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2893, 'Omsk', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2894, 'Kazan', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2895, 'Rostov-na-Donu', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2896, 'Chelyabinsk', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2897, 'Ufa', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2898, 'Volgograd', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2899, 'Perm', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2900, 'Krasnoyarsk', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2901, 'Saratov', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2902, 'Voronezh', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2903, 'Tol''yatti', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2904, 'Krasnodar', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2905, 'Ulyanovsk', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2906, 'Izhevsk', 'RUS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2907, 'Kigali', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2908, 'Butare', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2909, 'Gitarama', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2910, 'Musanze', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2911, 'Gisenyi', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2912, 'Byumba', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2913, 'Cyangugu', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2914, 'Kibuye', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2915, 'Rwamagana', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2916, 'Kibungo', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2917, 'Nzega', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2918, 'Nyanza', 'RWA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2919, 'Basseterre', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2920, 'Fig Tree', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2921, 'Market Shop', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2922, 'Saint Paul''s', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2923, 'Middle Island', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2924, 'Nicola Town', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2925, 'Trinity', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2926, 'Charlestown', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2927, 'Cayon', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2928, 'Sandy Point Town', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2929, 'Dieppe Bay Town', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2930, 'Monkey Hill', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2931, 'Newcastle', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2932, 'Cotton Ground', 'KNA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2933, 'Castries', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2934, 'Bisee', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2935, 'Vieux Fort', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2936, 'Micoud', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2937, 'Soufriere', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2938, 'Dennery', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2939, 'Gros Islet', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2940, 'Anse La Raye', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2941, 'Laborie', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2942, 'Choiseul', 'LCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2943, 'Marigot', 'MAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2944, 'Saint-Pierre', 'SPM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2945, 'Miquelon', 'SPM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2946, 'Kingstown', 'VCT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2947, 'Kingstown Park', 'VCT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2948, 'Georgetown', 'VCT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2949, 'Barrouallie', 'VCT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2950, 'Port Elizabeth', 'VCT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2951, 'Chateaubelair', 'VCT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2952, 'Layou', 'VCT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2953, 'Apia', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2954, 'Asau', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2955, 'Mulifanua', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2956, 'Afega', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2957, 'Leulumoega', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2958, 'Safotu', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2959, 'Lufilufi', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2960, 'Vailoa', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2961, 'Samamea', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2962, 'Safotulafai', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2963, 'Satupa`itea', 'WSM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2964, 'Serravalle', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2965, 'Borgo Maggiore', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2966, 'San Marino', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2967, 'Domagnano', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2968, 'Fiorentino', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2969, 'Acquaviva', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2970, 'Faetano', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2971, 'Poggio di Chiesanuova', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2972, 'Monte Giardino', 'SMR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2973, 'Sao Tome', 'STP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2974, 'Santo Antonio', 'STP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2975, 'Riyadh', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2976, 'Jeddah', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2977, 'Mecca', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2978, 'Medina', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2979, 'Sultanah', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2980, 'Dammam', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2981, 'Ta''if', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2982, 'Tabuk', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2983, 'Al Kharj', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2984, 'Buraydah', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2985, 'Khamis Mushait', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2986, 'Al Hufuf', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2987, 'Al Mubarraz', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2988, 'Hafar Al-Batin', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2989, 'Ha''il', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2990, 'Najran', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2991, 'Al Jubayl', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2992, 'Abha', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2993, 'Yanbu', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2994, 'Khobar', 'SAU');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2995, 'Dakar', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2996, 'Pikine', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2997, 'Touba', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2998, 'Thies', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (2999, 'Thies Nones', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3000, 'Saint-Louis', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3001, 'Kaolack', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3002, 'Ziguinchor', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3003, 'Tiebo', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3004, 'Tambacounda', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3005, 'Mbake', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3006, 'Louga', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3007, 'Kolda', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3008, 'Richard-Toll', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3009, 'Joal-Fadiout', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3010, 'N''diareme limamoulaye', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3011, 'Dara', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3012, 'Kaffrine', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3013, 'Ndibene Dahra', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3014, 'Bignona', 'SEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3015, 'Belgrade', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3016, 'Nis', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3017, 'Novi Sad', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3018, 'Zemun', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3019, 'Kragujevac', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3020, 'Cacak', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3021, 'Subotica', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3022, 'Leskovac', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3023, 'Novi Pazar', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3024, 'Kraljevo', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3025, 'Zrenjanin', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3026, 'Pancevo', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3027, 'Krusevac', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3028, 'Uzice', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3029, 'Smederevo', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3030, 'Valjevo', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3031, 'Vranje', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3032, 'Sabac', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3033, 'Zajecar', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3034, 'Trstenik', 'SRB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3035, 'Victoria', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3036, 'Anse Boileau', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3037, 'Bel Ombre', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3038, 'Beau Vallon', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3039, 'Cascade', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3040, 'Anse Royale', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3041, 'Takamaka', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3042, 'Port Glaud', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3043, 'La Passe', 'SYC');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3044, 'Freetown', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3045, 'Bo', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3046, 'Kenema', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3047, 'Koidu', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3048, 'Makeni', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3049, 'Lunsar', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3050, 'Port Loko', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3051, 'Waterloo', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3052, 'Kabala', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3053, 'Segbwema', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3054, 'Magburaka', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3055, 'Kailahun', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3056, 'Binkolo', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3057, 'Bumpe', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3058, 'Rokupr', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3059, 'Gandorhun', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3060, 'Kambia', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3061, 'Yengema', 'SLE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3062, 'Singapore', 'SGP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3063, 'Cul de Sac', 'SXM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3064, 'Lower Prince''s Quarter', 'SXM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3065, 'Koolbaai', 'SXM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3066, 'Philipsburg', 'SXM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3067, 'Bratislava', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3068, 'Kosice', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3069, 'Presov', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3070, 'Nitra', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3071, 'Zilina', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3072, 'Banska Bystrica', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3073, 'Trnava', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3074, 'Martin', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3075, 'Trencin', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3076, 'Poprad', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3077, 'Prievidza', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3078, 'Zvolen', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3079, 'Povazska Bystrica', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3080, 'Nove Zamky', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3081, 'Michalovce', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3082, 'Spisska Nova Ves', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3083, 'Levice', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3084, 'Komarno', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3085, 'Humenne', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3086, 'Liptovsky Mikulas', 'SVK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3087, 'Ljubljana', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3088, 'Maribor', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3089, 'Celje', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3090, 'Kranj', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3091, 'Velenje', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3092, 'Koper', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3093, 'Novo Mesto', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3094, 'Ptuj', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3095, 'Trbovlje', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3096, 'Kamnik', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3097, 'Jesenice', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3098, 'Nova Gorica', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3099, 'Domzale', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3100, 'Skofja Loka', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3101, 'Murska Sobota', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3102, 'Izola', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3103, 'Postojna', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3104, 'Logatec', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3105, 'Kocevje', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3106, 'Vrhnika', 'SVN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3107, 'Honiara', 'SLB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3108, 'Auki', 'SLB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3109, 'Gizo', 'SLB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3110, 'Buala', 'SLB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3111, 'Tulagi', 'SLB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3112, 'Kirakira', 'SLB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3113, 'Lata', 'SLB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3114, 'Taro', 'SLB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3115, 'Mogadishu', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3116, 'Hargeysa', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3117, 'Burao', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3118, 'Berbera', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3119, 'Kismayo', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3120, 'Marka', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3121, 'Jamaame', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3122, 'Baidoa', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3123, 'Bosaso', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3124, 'Afgooye', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3125, 'Gaalkacyo', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3126, 'Laascaanood', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3127, 'Garoowe', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3128, 'Beledweyne', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3129, 'Qoryooley', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3130, 'Jawhar', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3131, 'Jilib', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3132, 'Baardheere', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3133, 'Ceerigaabo', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3134, 'Luuq', 'SOM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3135, 'Cape Town', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3136, 'Durban', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3137, 'Johannesburg', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3138, 'Soweto', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3139, 'Pretoria', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3140, 'Port Elizabeth', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3141, 'Pietermaritzburg', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3142, 'Benoni', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3143, 'Tembisa', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3144, 'East London', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3145, 'Vereeniging', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3146, 'Bloemfontein', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3147, 'Boksburg', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3148, 'Welkom', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3149, 'Newcastle', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3150, 'Krugersdorp', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3151, 'Diepsloot', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3152, 'Randburg', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3153, 'Botshabelo', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3154, 'Brakpan', 'ZAF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3155, 'Seoul', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3156, 'Busan', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3157, 'Incheon', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3158, 'Daegu', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3159, 'Daejeon', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3160, 'Gwangju', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3161, 'Suwon', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3162, 'Goyang-si', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3163, 'Seongnam-si', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3164, 'Ulsan', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3165, 'Bucheon-si', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3166, 'Jeonju', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3167, 'Ansan-si', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3168, 'Cheongju-si', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3169, 'Anyang-si', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3170, 'Changwon', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3171, 'Pohang', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3172, 'Uijeongbu-si', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3173, 'Hwaseong-si', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3174, 'Masan', 'KOR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3175, 'Juba', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3176, 'Winejok', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3177, 'Malakal', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3178, 'Wau', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3179, 'Pajok', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3180, 'Yambio', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3181, 'Yei', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3182, 'Aweil', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3183, 'Gogrial', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3184, 'Rumbek', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3185, 'Bor', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3186, 'Torit', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3187, 'Tonj', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3188, 'Maridi', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3189, 'Leer', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3190, 'Tambura', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3191, 'Bentiu', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3192, 'Kapoeta', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3193, 'Raja', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3194, 'Yirol', 'SSD');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3195, 'Madrid', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3196, 'Barcelona', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3197, 'Valencia', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3198, 'Sevilla', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3199, 'Zaragoza', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3200, 'Malaga', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3201, 'Murcia', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3202, 'Palma', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3203, 'Las Palmas de Gran Canaria', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3204, 'Bilbao', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3205, 'Alicante', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3206, 'Cordoba', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3207, 'Valladolid', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3208, 'Vigo', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3209, 'Gijon', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3210, 'Eixample', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3211, 'L''Hospitalet de Llobregat', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3212, 'Latina', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3213, 'Carabanchel', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3214, 'A Coruna', 'ESP');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3215, 'Colombo', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3216, 'Dehiwala-Mount Lavinia', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3217, 'Moratuwa', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3218, 'Jaffna', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3219, 'Negombo', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3220, 'Pita Kotte', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3221, 'Sri Jayewardenepura Kotte', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3222, 'Kandy', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3223, 'Trincomalee', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3224, 'Kalmunai', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3225, 'Galle', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3226, 'Point Pedro', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3227, 'Batticaloa', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3228, 'Katunayaka', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3229, 'Valvedditturai', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3230, 'Matara', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3231, 'Battaramulla South', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3232, 'Dambulla', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3233, 'Maharagama', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3234, 'Kotikawatta', 'LKA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3235, 'Khartoum', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3236, 'Omdurman', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3237, 'Nyala', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3238, 'Port Sudan', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3239, 'Kassala', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3240, 'El Obeid', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3241, 'Al Qadarif', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3242, 'Kosti', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3243, 'Wad Medani', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3244, 'El Daein', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3245, 'El Fasher', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3246, 'Singa', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3247, 'Ad-Damazin', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3248, 'Geneina', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3249, 'Rabak', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3250, 'Sinnar', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3251, 'Al Manaqil', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3252, 'Gereida', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3253, 'An Nuhud', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3254, 'Atbara', 'SDN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3255, 'Paramaribo', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3256, 'Lelydorp', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3257, 'Brokopondo', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3258, 'Nieuw Nickerie', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3259, 'Moengo', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3260, 'Nieuw Amsterdam', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3261, 'Albina', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3262, 'Groningen', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3263, 'Onverwacht', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3264, 'Totness', 'SUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3265, 'Manzini', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3266, 'Mbabane', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3267, 'Big Bend', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3268, 'Malkerns', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3269, 'Nhlangano', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3270, 'Mhlume', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3271, 'Hluti', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3272, 'Siteki', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3273, 'Piggs Peak', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3274, 'Lobamba', 'SWZ');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3275, 'Stockholm', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3276, 'Goeteborg', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3277, 'Malmoe', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3278, 'Uppsala', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3279, 'Sollentuna', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3280, 'Soedermalm', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3281, 'Vaesteras', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3282, 'OErebro', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3283, 'Linkoeping', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3284, 'Helsingborg', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3285, 'Joenkoeping', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3286, 'Norrkoeping', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3287, 'Huddinge', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3288, 'Lund', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3289, 'Umea', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3290, 'Haninge', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3291, 'Gaevle', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3292, 'Boras', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3293, 'Soedertaelje', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3294, 'Kungsholmen', 'SWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3295, 'Zurich', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3296, 'Geneve', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3297, 'Basel', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3298, 'Bern', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3299, 'Lausanne', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3300, 'Winterthur', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3301, 'Sankt Gallen', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3302, 'Lugano', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3303, 'Luzern', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3304, 'Zuerich (Kreis 11)', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3305, 'Biel/Bienne', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3306, 'Zuerich (Kreis 3)', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3307, 'Zuerich (Kreis 9)', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3308, 'Thun', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3309, 'Koniz', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3310, 'La Chaux-de-Fonds', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3311, 'Zuerich (Kreis 10)', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3312, 'Rapperswil', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3313, 'Schaffhausen', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3314, 'Zuerich (Kreis 7)', 'CHE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3315, 'Aleppo', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3316, 'Damascus', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3317, 'Homs', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3318, 'Hamah', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3319, 'Latakia', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3320, 'Deir ez-Zor', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3321, 'Ar Raqqah', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3322, 'Al Bab', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3323, 'Idlib', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3324, 'Douma', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3325, 'Manbij', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3326, 'Dar''a', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3327, 'As Salamiyah', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3328, 'Tartouss', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3329, 'Ath Thawrah', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3330, 'Al Hasakah', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3331, 'Darayya', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3332, 'I`zaz', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3333, 'Jablah', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3334, 'As Safirah', 'SYR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3335, 'Taipei', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3336, 'Kaohsiung', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3337, 'Taichung', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3338, 'Tainan', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3339, 'Banqiao', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3340, 'Hsinchu', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3341, 'Taoyuan City', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3342, 'Keelung', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3343, 'Hualien City', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3344, 'Yuanlin', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3345, 'Taitung City', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3346, 'Nantou', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3347, 'Douliu', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3348, 'Yilan', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3349, 'Puli', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3350, 'Daxi', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3351, 'Magong', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3352, 'Donggang', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3353, 'Jincheng', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3354, 'Hengchun', 'TWN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3355, 'Dushanbe', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3356, 'Khujand', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3357, 'Kulob', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3358, 'Qurghonteppa', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3359, 'Istaravshan', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3360, 'Konibodom', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3361, 'Vahdat', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3362, 'Isfara', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3363, 'Tursunzoda', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3364, 'Panjakent', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3365, 'Khorugh', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3366, 'Ishqoshim', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3367, 'Hisor', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3368, 'Boshkengash', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3369, 'Danghara', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3370, 'Moskovskiy', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3371, 'Farkhor', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3372, 'Vose''', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3373, 'Chkalov', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3374, 'Chubek', 'TJK');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3375, 'Dar es Salaam', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3376, 'Mwanza', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3377, 'Zanzibar', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3378, 'Arusha', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3379, 'Mbeya', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3380, 'Morogoro', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3381, 'Tanga', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3382, 'Dodoma', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3383, 'Kigoma', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3384, 'Moshi', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3385, 'Tabora', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3386, 'Songea', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3387, 'Musoma', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3388, 'Iringa', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3389, 'Katumba', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3390, 'Shinyanga', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3391, 'Mtwara', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3392, 'Ushirombo', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3393, 'Kilosa', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3394, 'Sumbawanga', 'TZA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3395, 'Bangkok', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3396, 'Samut Prakan', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3397, 'Mueang Nonthaburi', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3398, 'Udon Thani', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3399, 'Chon Buri', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3400, 'Nakhon Ratchasima', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3401, 'Chiang Mai', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3402, 'Hat Yai', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3403, 'Pak Kret', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3404, 'Si Racha', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3405, 'Phra Pradaeng', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3406, 'Lampang', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3407, 'Khon Kaen', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3408, 'Surat Thani', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3409, 'Ubon Ratchathani', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3410, 'Nakhon Si Thammarat', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3411, 'Khlong Luang', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3412, 'Nakhon Pathom', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3413, 'Rayong', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3414, 'Phitsanulok', 'THA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3415, 'Dili', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3416, 'Maliana', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3417, 'Suai', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3418, 'Likisa', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3419, 'Aileu', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3420, 'Lospalos', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3421, 'Maubara', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3422, 'Venilale', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3423, 'Baukau', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3424, 'Ainaro', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3425, 'Gleno', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3426, 'Same', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3427, 'Viqueque', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3428, 'Pante Makasar', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3429, 'Manatutu', 'TLS');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3430, 'Lome', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3431, 'Sokode', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3432, 'Kara', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3433, 'Atakpame', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3434, 'Kpalime', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3435, 'Bassar', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3436, 'Tsevie', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3437, 'Aneho', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3438, 'Sansanne-Mango', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3439, 'Dapaong', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3440, 'Tchamba', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3441, 'Badou', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3442, 'Niamtougou', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3443, 'Bafilo', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3444, 'Notse', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3445, 'Sotouboua', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3446, 'Vogan', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3447, 'Tabligbo', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3448, 'Kande', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3449, 'Amlame', 'TGO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3450, 'Atafu Village', 'TKL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3451, 'Nukunonu', 'TKL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3452, 'Fale old settlement', 'TKL');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3453, 'Nuku''alofa', 'TON');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3454, 'Neiafu', 'TON');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3455, 'Pangai', 'TON');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3456, '`Ohonua', 'TON');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3457, 'Hihifo', 'TON');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3458, 'Chaguanas', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3459, 'Mon Repos', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3460, 'San Fernando', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3461, 'Port of Spain', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3462, 'Rio Claro', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3463, 'Arima', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3464, 'Marabella', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3465, 'Laventille', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3466, 'Point Fortin', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3467, 'Tunapuna', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3468, 'Scarborough', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3469, 'Sangre Grande', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3470, 'Paradise', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3471, 'Penal', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3472, 'Arouca', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3473, 'Princes Town', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3474, 'Siparia', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3475, 'Petit Valley', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3476, 'Couva', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3477, 'Diego Martin', 'TTO');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3478, 'Tunis', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3479, 'Sfax', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3480, 'Sousse', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3481, 'Kairouan', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3482, 'Bizerte', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3483, 'Gabes', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3484, 'Ariana', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3485, 'Kasserine', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3486, 'Gafsa', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3487, 'La Goulette', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3488, 'Zarzis', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3489, 'Ben Arous', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3490, 'Monastir', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3491, 'La Mohammedia', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3492, 'Al Marsa', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3493, 'Msaken', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3494, 'Skanes', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3495, 'Houmt El Souk', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3496, 'Tataouine', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3497, 'El Hamma', 'TUN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3498, 'Istanbul', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3499, 'Ankara', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3500, 'Izmir', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3501, 'Bursa', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3502, 'Adana', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3503, 'Gaziantep', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3504, 'Konya', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3505, 'Cankaya', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3506, 'Antalya', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3507, 'Bagcilar', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3508, 'Diyarbakir', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3509, 'Kayseri', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3510, 'UEskuedar', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3511, 'Bahcelievler', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3512, 'Umraniye', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3513, 'Mersin', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3514, 'Esenler', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3515, 'Eskisehir', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3516, 'Karabaglar', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3517, 'Muratpasa', 'TUR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3518, 'Ashgabat', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3519, 'Turkmenabat', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3520, 'Dasoguz', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3521, 'Mary', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3522, 'Balkanabat', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3523, 'Bayramaly', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3524, 'Turkmenbasy', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3525, 'Tejen', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3526, 'Abadan', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3527, 'Yoloeten', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3528, 'Gowurdak', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3529, 'Atamyrat', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3530, 'Koeneuergench', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3531, 'Annau', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3532, 'Yylanly', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3533, 'Gumdag', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3534, 'Baharly', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3535, 'Boldumsaz', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3536, 'Bereket', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3537, 'Gazojak', 'TKM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3538, 'Cockburn Town', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3539, 'Funafuti', 'TUV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3540, 'Savave Village', 'TUV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3541, 'Tanrake Village', 'TUV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3542, 'Toga Village', 'TUV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3543, 'Asau Village', 'TUV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3544, 'Kulia Village', 'TUV');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3545, 'Kampala', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3546, 'Gulu', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3547, 'Lira', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3548, 'Mbarara', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3549, 'Jinja', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3550, 'Bwizibwera', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3551, 'Mbale', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3552, 'Mukono', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3553, 'Kasese', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3554, 'Masaka', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3555, 'Entebbe', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3556, 'Njeru', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3557, 'Kitgum', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3558, 'Soroti', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3559, 'Arua', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3560, 'Iganga', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3561, 'Kabale', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3562, 'Busia', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3563, 'Fort Portal', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3564, 'Mityana', 'TCA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3565, 'Kampala', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3566, 'Gulu', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3567, 'Lira', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3568, 'Mbarara', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3569, 'Jinja', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3570, 'Bwizibwera', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3571, 'Mbale', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3572, 'Mukono', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3573, 'Kasese', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3574, 'Masaka', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3575, 'Entebbe', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3576, 'Njeru', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3577, 'Kitgum', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3578, 'Soroti', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3579, 'Arua', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3580, 'Iganga', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3581, 'Kabale', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3582, 'Busia', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3583, 'Fort Portal', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3584, 'Mityana', 'UGA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3585, 'Kyiv', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3586, 'Kharkiv', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3587, 'Dnipro', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3588, 'Donetsk', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3589, 'Odessa', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3590, 'Zaporizhia', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3591, 'Lviv', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3592, 'Kryvyi Rih', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3593, 'Mykolayiv', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3594, 'Mariupol', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3595, 'Luhansk', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3596, 'Sevastopol', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3597, 'Khmelnytskyi', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3598, 'Makiyivka', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3599, 'Vinnytsia', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3600, 'Simferopol', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3601, 'Kherson', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3602, 'Poltava', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3603, 'Chernihiv', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3604, 'Cherkasy', 'UKR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3605, 'Dubai', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3606, 'Abu Dhabi', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3607, 'Sharjah', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3608, 'Al Ain', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3609, 'Ajman', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3610, 'Ras al-Khaimah', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3611, 'Al Fujayrah', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3612, 'Umm al Qaywayn', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3613, 'Khawr Fakkan', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3614, 'Dibba Al-Fujairah', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3615, 'Dibba Al-Hisn', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3616, 'Adh Dhayd', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3617, 'Ar Ruways', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3618, 'Muzayri''', 'ARE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3619, 'Saint Croix', 'VIR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3620, 'Charlotte Amalie', 'VIR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3621, 'Cruz Bay', 'VIR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3622, 'Montevideo', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3623, 'Salto', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3624, 'Paysandu', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3625, 'Las Piedras', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3626, 'Rivera', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3627, 'Maldonado', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3628, 'Tacuarembo', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3629, 'Melo', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3630, 'Mercedes', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3631, 'Artigas', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3632, 'Minas', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3633, 'San Jose de Mayo', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3634, 'Durazno', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3635, 'Florida', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3636, 'Barros Blancos', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3637, 'Treinta y Tres', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3638, 'Rocha', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3639, 'San Carlos', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3640, 'Pando', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3641, 'Fray Bentos', 'URY');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3642, 'Tashkent', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3643, 'Namangan', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3644, 'Samarkand', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3645, 'Andijon', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3646, 'Bukhara', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3647, 'Nukus', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3648, 'Qarshi', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3649, 'Qo`qon', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3650, 'Chirchiq', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3651, 'Fergana', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3652, 'Jizzax', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3653, 'Urganch', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3654, 'Tirmiz', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3655, 'Marg`ilon', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3656, 'Navoiy', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3657, 'Angren', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3658, 'Olmaliq', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3659, 'Bekobod', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3660, 'Denov', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3661, 'Chust', 'UZB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3662, 'Port-Vila', 'VUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3663, 'Luganville', 'VUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3664, 'Isangel', 'VUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3665, 'Sola', 'VUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3666, 'Lakatoro', 'VUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3667, 'Saratamata', 'VUT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3668, 'Vatican City', 'VAT');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3669, 'Caracas', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3670, 'Maracaibo', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3671, 'Maracay', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3672, 'Valencia', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3673, 'Barquisimeto', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3674, 'Ciudad Guayana', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3675, 'Barcelona', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3676, 'Maturin', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3677, 'Puerto La Cruz', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3678, 'Petare', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3679, 'Barinas', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3680, 'Turmero', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3681, 'Ciudad Bolivar', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3682, 'Merida', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3683, 'Alto Barinas', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3684, 'Santa Teresa del Tuy', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3685, 'Cumana', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3686, 'San Cristobal', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3687, 'Nuestra Senora del Rosario de Baruta', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3688, 'Mucumpiz', 'VEN');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3689, 'Ho Chi Minh City', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3690, 'Hanoi', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3691, 'Da Nang', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3692, 'Haiphong', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3693, 'Bien Hoa', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3694, 'Hue', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3695, 'Nha Trang', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3696, 'Can Tho', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3697, 'Rach Gia', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3698, 'Qui Nhon', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3699, 'Vung Tau', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3700, 'Da Lat', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3701, 'Nam Dinh', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3702, 'Vinh', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3703, 'GJuc Trong', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3704, 'La Gi', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3705, 'Phan Thiet', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3706, 'Long Xuyen', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3707, 'Can Giuoc', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3708, 'Bao Loc', 'VNM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3709, 'Mata-Utu', 'WLF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3710, 'Leava', 'WLF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3711, 'Alo', 'WLF');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3712, 'Laayoune', 'ESH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3713, 'Dakhla', 'ESH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3714, 'Laayoune Plage', 'ESH');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3715, 'Sanaa', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3716, 'Al Hudaydah', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3717, 'Ta`izz', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3718, 'Aden', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3719, 'Mukalla', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3720, 'Ibb', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3721, 'Dhamar', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3722, '''Amran', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3723, 'Sayyan', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3724, 'Zabid', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3725, 'Sa''dah', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3726, 'Bajil', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3727, 'Hajjah', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3728, 'Dhi as Sufal', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3729, 'Al Bayda', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3730, 'Ataq', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3731, 'Bayt al Faqih', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3732, 'Yarim', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3733, 'Sahar', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3734, 'Lahij', 'YEM');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3735, 'Lusaka', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3736, 'Kitwe', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3737, 'Ndola', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3738, 'Kabwe', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3739, 'Chingola', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3740, 'Mufulira', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3741, 'Luanshya', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3742, 'Livingstone', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3743, 'Kasama', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3744, 'Chipata', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3745, 'Kalulushi', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3746, 'Mazabuka', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3747, 'Chililabombwe', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3748, 'Mongu', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3749, 'Kafue', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3750, 'Choma', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3751, 'Mansa', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3752, 'Kansanshi', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3753, 'Kapiri Mposhi', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3754, 'Monze', 'ZMB');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3755, 'Harare', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3756, 'Bulawayo', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3757, 'Chitungwiza', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3758, 'Mutare', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3759, 'Gweru', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3760, 'Epworth', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3761, 'Kwekwe', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3762, 'Kadoma', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3763, 'Masvingo', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3764, 'Chinhoyi', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3765, 'Marondera', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3766, 'Norton', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3767, 'Chegutu', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3768, 'Bindura', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3769, 'Zvishavane', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3770, 'Victoria Falls', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3771, 'Hwange', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3772, 'Redcliff', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3773, 'Ruwa', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3774, 'Rusape', 'ZWE');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3775, 'City of London', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3776, 'Bangor', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3777, 'Cardiff', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3778, 'Newport', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3779, 'St Davids', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3780, 'Swansea', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3781, 'Aberdeen', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3782, 'Dundee', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3783, 'Edinburgh', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3784, 'Glasgow', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3785, 'Inverness', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3786, 'Stirling', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3787, 'Armagh', 'GBR');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3788, 'New York City', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3789, 'Los Angeles', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3790, 'Chicago', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3791, 'Houston', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3792, 'Phoenix', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3793, 'Philadelphia', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3794, 'San Antonio', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3795, 'San Diego', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3796, 'Dallas', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3797, 'San Jose', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3798, 'Austin', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3799, 'Jacksonville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3800, 'Fort Worth', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3801, 'San Francisco', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3802, 'Columbus', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3803, 'Charlotte', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3804, 'Indianapolis', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3805, 'Seattle', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3806, 'Denver', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3807, 'Washington Dc', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3808, 'El Paso', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3809, 'Boston', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3810, 'Nashville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3811, 'Portland', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3812, 'Las Vegas', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3813, 'Detroit', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3814, 'Oklahoma City', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3815, 'Memphis', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3816, 'Louisville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3817, 'Baltimore', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3818, 'Milwaukee', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3819, 'Albuquerque', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3820, 'Tucson', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3821, 'Fresno', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3822, 'Sacramento', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3823, 'Mesa', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3824, 'Atlanta', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3825, 'Kansas City', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3826, 'Colorado Springs', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3827, 'Miami', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3828, 'Raleigh', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3829, 'Long Beach', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3830, 'Virginia Beach', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3831, 'Omaha', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3832, 'Oakland', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3833, 'Minneapolis', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3834, 'Arlington', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3835, 'Tampa', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3836, 'Tulsa', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3837, 'New Orleans', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3838, 'Wichita', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3839, 'Bakersfield', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3840, 'Cleveland', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3841, 'Aurora', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3842, 'Anaheim', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3843, 'Honolulu', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3844, 'Riverside', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3845, 'Santa Ana', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3846, 'Lexington', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3847, 'Corpus Christi', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3848, 'Henderson', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3849, 'Stockton', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3850, 'St. Paul', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3851, 'Pittsburgh', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3852, 'St. Louis', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3853, 'Cincinnati', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3854, 'Anchorage', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3855, 'Orlando', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3856, 'Irvine', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3857, 'Plano', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3858, 'Greensboro', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3859, 'Lincoln', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3860, 'Newark', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3861, 'Durham', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3862, 'Toledo', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3863, 'St. Petersburg', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3864, 'Chula Vista', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3865, 'Fort Wayne', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3866, 'Scottsdale', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3867, 'Jersey City', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3868, 'Laredo', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3869, 'Madison', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3870, 'Lubbock', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3871, 'Reno', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3872, 'Chandler', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3873, 'Glendale', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3874, 'Buffalo', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3875, 'North Las Vegas', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3876, 'Gilbert', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3877, 'Winston Salem', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3878, 'Chesapeake', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3879, 'Irving', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3880, 'Norfolk', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3881, 'Fremont', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3882, 'Hialeah', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3883, 'Richmond', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3884, 'Boise', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3885, 'Garland', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3886, 'Baton Rouge', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3887, 'Spokane', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3888, 'Tacoma', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3889, 'Modesto', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3890, 'San Bernardino', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3891, 'Fontana', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3892, 'Des Moines', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3893, 'Oxnard', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3894, 'Moreno Valley', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3895, 'Birmingham', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3896, 'Fayetteville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3897, 'Rochester', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3898, 'Amarillo', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3899, 'Port St. Lucie', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3900, 'Yonkers', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3901, 'Mckinney', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3902, 'Grand Prairie', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3903, 'Salt Lake City', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3904, 'Grand Rapids', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3905, 'Little Rock', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3906, 'Huntsville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3907, 'Huntington Beach', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3908, 'Augusta', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3909, 'Overland Park', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3910, 'Montgomery', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3911, 'Tempe', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3912, 'Akron', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3913, 'Cape Coral', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3914, 'Tallahassee', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3915, 'Frisco', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3916, 'Mobile', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3917, 'Knoxville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3918, 'Shreveport', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3919, 'Brownsville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3920, 'Worcester', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3921, 'Santa Clarita', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3922, 'Sioux Falls', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3923, 'Fort Lauderdale', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3924, 'Vancouver', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3925, 'Rancho Cucamonga', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3926, 'Chattanooga', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3927, 'Newport News', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3928, 'Ontario', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3929, 'Providence', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3930, 'Elk Grove', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3931, 'Salem', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3932, 'Oceanside', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3933, 'Santa Rosa', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3934, 'Corona', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3935, 'Eugene', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3936, 'Garden Grove', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3937, 'Peoria', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3938, 'Pembroke Pines', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3939, 'Fort Collins', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3940, 'Cary', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3941, 'Springfield', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3942, 'Jackson', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3943, 'Alexandria', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3944, 'Hayward', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3945, 'Hollywood', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3946, 'Lakewood', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3947, 'Lancaster', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3948, 'Salinas', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3949, 'Sunnyvale', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3950, 'Palmdale', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3951, 'Clarksville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3952, 'Escondido', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3953, 'Pomona', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3954, 'Pasadena', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3955, 'Killeen', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3956, 'Macon Bibb County', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3957, 'Joliet', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3958, 'Murfreesboro', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3959, 'Mcallen', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3960, 'Savannah', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3961, 'Naperville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3962, 'Paterson', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3963, 'Thornton', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3964, 'Bellevue', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3965, 'Torrance', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3966, 'Rockford', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3967, 'Miramar', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3968, 'Bridgeport', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3969, 'Mesquite', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3970, 'Fullerton', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3971, 'Denton', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3972, 'Waco', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3973, 'Syracuse', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3974, 'Roseville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3975, 'Orange', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3976, 'Surprise', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3977, 'Dayton', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3978, 'Charleston', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3979, 'Olathe', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3980, 'Midland', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3981, 'West Valley City', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3982, 'Gainesville', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3983, 'Columbia', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3984, 'Carrollton', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3985, 'Warren', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3986, 'Sterling Heights', 'USA');
INSERT INTO public.misc_cities (city_id, name, country_code_id) VALUES (3987, 'Hamn', 'USA');


--
-- TOC entry 4439 (class 0 OID 712848)
-- Dependencies: 249
-- Data for Name: misc_countries; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.misc_countries (country_code, name) VALUES ('AFG', 'Afghanistan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ALB', 'Albania');
INSERT INTO public.misc_countries (country_code, name) VALUES ('DZA', 'Algeria');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ASM', 'American Samoa');
INSERT INTO public.misc_countries (country_code, name) VALUES ('AND', 'Andorra');
INSERT INTO public.misc_countries (country_code, name) VALUES ('AGO', 'Angola');
INSERT INTO public.misc_countries (country_code, name) VALUES ('AIA', 'Anguilla');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ATG', 'Antigua And Barbuda');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ARG', 'Argentina');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ARM', 'Armenia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ABW', 'Aruba');
INSERT INTO public.misc_countries (country_code, name) VALUES ('AUS', 'Australia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('AUT', 'Austria');
INSERT INTO public.misc_countries (country_code, name) VALUES ('AZE', 'Azerbaijan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BHS', 'Bahamas');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BHR', 'Bahrain');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BGD', 'Bangladesh');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BRB', 'Barbados');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BLR', 'Belarus');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BEL', 'Belgium');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BLZ', 'Belize');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BEN', 'Benin');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BMU', 'Bermuda');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BTN', 'Bhutan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BOL', 'Bolivia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BIH', 'Bosnia And Herzegovina');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BWA', 'Botswana');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BRA', 'Brazil');
INSERT INTO public.misc_countries (country_code, name) VALUES ('VGB', 'British Virgin Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BRN', 'Brunei');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BGR', 'Bulgaria');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BFA', 'Burkina Faso');
INSERT INTO public.misc_countries (country_code, name) VALUES ('BDI', 'Burundi');
INSERT INTO public.misc_countries (country_code, name) VALUES ('KHM', 'Cambodia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CMR', 'Cameroon');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CAN', 'Canada');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CPV', 'Cape Verde');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CYM', 'Cayman Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CAF', 'Central African Republic');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TCD', 'Chad');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CHL', 'Chile');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CHN', 'China');
INSERT INTO public.misc_countries (country_code, name) VALUES ('COL', 'Colombia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('COM', 'Comoros');
INSERT INTO public.misc_countries (country_code, name) VALUES ('COK', 'Cook Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CRI', 'Costa Rica');
INSERT INTO public.misc_countries (country_code, name) VALUES ('HRV', 'Croatia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CUB', 'Cuba');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CUW', 'Curacao');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CYP', 'Cyprus');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CZE', 'Czech Republic');
INSERT INTO public.misc_countries (country_code, name) VALUES ('DNK', 'Denmark');
INSERT INTO public.misc_countries (country_code, name) VALUES ('DJI', 'Djibouti');
INSERT INTO public.misc_countries (country_code, name) VALUES ('DMA', 'Dominica');
INSERT INTO public.misc_countries (country_code, name) VALUES ('DOM', 'Dominican Republic');
INSERT INTO public.misc_countries (country_code, name) VALUES ('COD', 'Dr Congo');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ECU', 'Ecuador');
INSERT INTO public.misc_countries (country_code, name) VALUES ('EGY', 'Egypt');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SLV', 'El Salvador');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GNQ', 'Equatorial Guinea');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ERI', 'Eritrea');
INSERT INTO public.misc_countries (country_code, name) VALUES ('EST', 'Estonia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ETH', 'Ethiopia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('FLK', 'Falkland Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('FRO', 'Faroe Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('FJI', 'Fiji');
INSERT INTO public.misc_countries (country_code, name) VALUES ('FIN', 'Finland');
INSERT INTO public.misc_countries (country_code, name) VALUES ('FRA', 'France');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GUF', 'French Guiana');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PYF', 'French Polynesia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GAB', 'Gabon');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GMB', 'Gambia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GEO', 'Georgia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('DEU', 'Germany');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GHA', 'Ghana');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GIB', 'Gibraltar');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GRC', 'Greece');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GRL', 'Greenland');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GRD', 'Grenada');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GLP', 'Guadeloupe');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GUM', 'Guam');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GTM', 'Guatemala');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GGY', 'Guernsey');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GIN', 'Guinea');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GNB', 'Guinea Bissau');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GUY', 'Guyana');
INSERT INTO public.misc_countries (country_code, name) VALUES ('HTI', 'Haiti');
INSERT INTO public.misc_countries (country_code, name) VALUES ('HND', 'Honduras');
INSERT INTO public.misc_countries (country_code, name) VALUES ('HKG', 'Hong Kong');
INSERT INTO public.misc_countries (country_code, name) VALUES ('HUN', 'Hungary');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ISL', 'Iceland');
INSERT INTO public.misc_countries (country_code, name) VALUES ('IND', 'India');
INSERT INTO public.misc_countries (country_code, name) VALUES ('IDN', 'Indonesia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('IRN', 'Iran');
INSERT INTO public.misc_countries (country_code, name) VALUES ('IRQ', 'Iraq');
INSERT INTO public.misc_countries (country_code, name) VALUES ('IRL', 'Ireland');
INSERT INTO public.misc_countries (country_code, name) VALUES ('IMN', 'Isle Of Man');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ISR', 'Israel');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ITA', 'Italy');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CIV', 'Ivory Coast');
INSERT INTO public.misc_countries (country_code, name) VALUES ('JAM', 'Jamaica');
INSERT INTO public.misc_countries (country_code, name) VALUES ('JPN', 'Japan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('JEY', 'Jersey');
INSERT INTO public.misc_countries (country_code, name) VALUES ('JOR', 'Jordan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('KAZ', 'Kazakhstan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('KEN', 'Kenya');
INSERT INTO public.misc_countries (country_code, name) VALUES ('KIR', 'Kiribati');
INSERT INTO public.misc_countries (country_code, name) VALUES ('UNK', 'Kosovo');
INSERT INTO public.misc_countries (country_code, name) VALUES ('KWT', 'Kuwait');
INSERT INTO public.misc_countries (country_code, name) VALUES ('KGZ', 'Kyrgyzstan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LAO', 'Laos');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LVA', 'Latvia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LBN', 'Lebanon');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LSO', 'Lesotho');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LBR', 'Liberia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LBY', 'Libya');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LIE', 'Liechtenstein');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LTU', 'Lithuania');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LUX', 'Luxembourg');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MAC', 'Macau');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MKD', 'Macedonia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MDG', 'Madagascar');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MWI', 'Malawi');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MYS', 'Malaysia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MDV', 'Maldives');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MLI', 'Mali');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MLT', 'Malta');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MHL', 'Marshall Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MTQ', 'Martinique');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MRT', 'Mauritania');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MUS', 'Mauritius');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MYT', 'Mayotte');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MEX', 'Mexico');
INSERT INTO public.misc_countries (country_code, name) VALUES ('FSM', 'Micronesia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MDA', 'Moldova');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MCO', 'Monaco');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MNG', 'Mongolia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MNE', 'Montenegro');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MSR', 'Montserrat');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MAR', 'Morocco');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MOZ', 'Mozambique');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MMR', 'Myanmar');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NAM', 'Namibia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NRU', 'Nauru');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NPL', 'Nepal');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NLD', 'Netherlands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NCL', 'New Caledonia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NZL', 'New Zealand');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NIC', 'Nicaragua');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NER', 'Niger');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NGA', 'Nigeria');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NIU', 'Niue');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PRK', 'North Korea');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MNP', 'Northern Mariana Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('NOR', 'Norway');
INSERT INTO public.misc_countries (country_code, name) VALUES ('OMN', 'Oman');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PAK', 'Pakistan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PLW', 'Palau');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PSE', 'Palestine');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PAN', 'Panama');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PNG', 'Papua New Guinea');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PRY', 'Paraguay');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PER', 'Peru');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PHL', 'Philippines');
INSERT INTO public.misc_countries (country_code, name) VALUES ('POL', 'Poland');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PRT', 'Portugal');
INSERT INTO public.misc_countries (country_code, name) VALUES ('PRI', 'Puerto Rico');
INSERT INTO public.misc_countries (country_code, name) VALUES ('QAT', 'Qatar');
INSERT INTO public.misc_countries (country_code, name) VALUES ('COG', 'Republic Of The Congo');
INSERT INTO public.misc_countries (country_code, name) VALUES ('REU', 'Reunion');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ROU', 'Romania');
INSERT INTO public.misc_countries (country_code, name) VALUES ('RUS', 'Russia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('RWA', 'Rwanda');
INSERT INTO public.misc_countries (country_code, name) VALUES ('KNA', 'Saint Kitts And Nevis');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LCA', 'Saint Lucia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('MAF', 'Saint Martin');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SPM', 'Saint Pierre And Miquelon');
INSERT INTO public.misc_countries (country_code, name) VALUES ('VCT', 'Saint Vincent And The Grenadines');
INSERT INTO public.misc_countries (country_code, name) VALUES ('WSM', 'Samoa');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SMR', 'San Marino');
INSERT INTO public.misc_countries (country_code, name) VALUES ('STP', 'Sao Tome And Principe');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SAU', 'Saudi Arabia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SEN', 'Senegal');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SRB', 'Serbia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SYC', 'Seychelles');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SLE', 'Sierra Leone');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SGP', 'Singapore');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SXM', 'Sint Maarten');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SVK', 'Slovakia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SVN', 'Slovenia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SLB', 'Solomon Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SOM', 'Somalia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ZAF', 'South Africa');
INSERT INTO public.misc_countries (country_code, name) VALUES ('KOR', 'South Korea');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SSD', 'South Sudan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ESP', 'Spain');
INSERT INTO public.misc_countries (country_code, name) VALUES ('LKA', 'Sri Lanka');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SDN', 'Sudan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SUR', 'Suriname');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SWZ', 'Swaziland');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SWE', 'Sweden');
INSERT INTO public.misc_countries (country_code, name) VALUES ('CHE', 'Switzerland');
INSERT INTO public.misc_countries (country_code, name) VALUES ('SYR', 'Syria');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TWN', 'Taiwan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TJK', 'Tajikistan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TZA', 'Tanzania');
INSERT INTO public.misc_countries (country_code, name) VALUES ('THA', 'Thailand');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TLS', 'Timor Leste');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TGO', 'Togo');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TKL', 'Tokelau');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TON', 'Tonga');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TTO', 'Trinidad And Tobago');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TUN', 'Tunisia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TUR', 'Turkey');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TKM', 'Turkmenistan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TCA', 'Turks And Caicos Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('TUV', 'Tuvalu');
INSERT INTO public.misc_countries (country_code, name) VALUES ('UGA', 'Uganda');
INSERT INTO public.misc_countries (country_code, name) VALUES ('UKR', 'Ukraine');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ARE', 'United Arab Emirates');
INSERT INTO public.misc_countries (country_code, name) VALUES ('GBR', 'United Kingdom');
INSERT INTO public.misc_countries (country_code, name) VALUES ('USA', 'United States');
INSERT INTO public.misc_countries (country_code, name) VALUES ('VIR', 'United States Virgin Islands');
INSERT INTO public.misc_countries (country_code, name) VALUES ('URY', 'Uruguay');
INSERT INTO public.misc_countries (country_code, name) VALUES ('UZB', 'Uzbekistan');
INSERT INTO public.misc_countries (country_code, name) VALUES ('VUT', 'Vanuatu');
INSERT INTO public.misc_countries (country_code, name) VALUES ('VAT', 'Vatican City');
INSERT INTO public.misc_countries (country_code, name) VALUES ('VEN', 'Venezuela');
INSERT INTO public.misc_countries (country_code, name) VALUES ('VNM', 'Vietnam');
INSERT INTO public.misc_countries (country_code, name) VALUES ('WLF', 'Wallis And Futuna');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ESH', 'Western Sahara');
INSERT INTO public.misc_countries (country_code, name) VALUES ('YEM', 'Yemen');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ZMB', 'Zambia');
INSERT INTO public.misc_countries (country_code, name) VALUES ('ZWE', 'Zimbabwe');


--
-- TOC entry 4440 (class 0 OID 712851)
-- Dependencies: 250
-- Data for Name: products_categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_categories (cat_id, name) VALUES (1, 'Wardrobes');
INSERT INTO public.products_categories (cat_id, name) VALUES (2, 'Beds');
INSERT INTO public.products_categories (cat_id, name) VALUES (3, 'Tables');
INSERT INTO public.products_categories (cat_id, name) VALUES (4, 'Sofas');
INSERT INTO public.products_categories (cat_id, name) VALUES (5, 'Desks');
INSERT INTO public.products_categories (cat_id, name) VALUES (6, 'Bookcases & Shelving Units');


--
-- TOC entry 4442 (class 0 OID 712856)
-- Dependencies: 252
-- Data for Name: products_colourfamilies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_colourfamilies (name) VALUES ('White');
INSERT INTO public.products_colourfamilies (name) VALUES ('Cyan');
INSERT INTO public.products_colourfamilies (name) VALUES ('Brown');
INSERT INTO public.products_colourfamilies (name) VALUES ('Blue');
INSERT INTO public.products_colourfamilies (name) VALUES ('Green');
INSERT INTO public.products_colourfamilies (name) VALUES ('Orange');
INSERT INTO public.products_colourfamilies (name) VALUES ('Yellow');
INSERT INTO public.products_colourfamilies (name) VALUES ('Purple');
INSERT INTO public.products_colourfamilies (name) VALUES ('Red');
INSERT INTO public.products_colourfamilies (name) VALUES ('Grey');
INSERT INTO public.products_colourfamilies (name) VALUES ('Pink');
INSERT INTO public.products_colourfamilies (name) VALUES ('Gold');
INSERT INTO public.products_colourfamilies (name) VALUES ('Black');
INSERT INTO public.products_colourfamilies (name) VALUES ('Maroon');


--
-- TOC entry 4443 (class 0 OID 712859)
-- Dependencies: 253
-- Data for Name: products_colours; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (1, 'Blue, White', 'Alice Blue', '#F0F8FF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (2, 'White', 'Antique White', '#FAEBD7');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (3, 'Cyan', 'Aqua Marine', '#7FFFD4');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (4, 'White', 'Azure', '#F0FFFF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (5, 'White', 'Beige', '#F5F5DC');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (6, 'Brown', 'Bisque', '#FFE4C4');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (7, 'Black, Grey', 'Black', '#000000');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (8, 'Brown', 'Blanched Almond', '#FFEBCD');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (9, 'Blue', 'Blue', '#0000FF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (10, 'Blue, Purple', 'Blue Violet', '#8A2BE2');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (11, 'Brown, Maroon', 'Brown', '#A52A2A');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (12, 'Brown', 'Burlywood', '#DEB887');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (13, 'Blue, Cyan', 'Cadet Blue', '#5F9EA0');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (14, 'Green', 'Chartreuse', '#7FFF00');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (15, 'Brown', 'Chocolate', '#D2691E');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (16, 'Orange', 'Coral', '#FF7F50');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (17, 'Blue', 'Cornflower Blue', '#6495ED');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (18, 'Brown', 'Cornsilk', '#FFF8DC');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (19, 'Maroon, Red', 'Crimson', '#DC143C');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (20, 'Cyan', 'Cyan', '#00FFFF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (21, 'Blue', 'Dark Blue', '#00008B');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (22, 'Cyan', 'Dark Cyan', '#008B8B');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (23, 'Black, Grey', 'Dark Grey', '#A9A9A9');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (24, 'Green', 'Dark Green', '#006400');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (25, 'Yellow', 'Dark Khaki', '#BDB76B');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (26, 'Purple', 'Dark Magenta', '#8B008B');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (27, 'Green', 'Dark Olive Green', '#556B2F');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (28, 'Gold, Orange', 'Dark Orange', '#FF8C00');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (29, 'Purple', 'Dark Orchid', '#9932CC');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (30, 'Maroon, Red', 'Dark Red', '#8B0000');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (31, 'Red', 'Dark Salmon', '#E9967A');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (32, 'Green', 'Dark Sea Green', '#8FBC8F');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (33, 'Blue', 'Dark Slate Blue', '#483D8B');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (34, 'Grey', 'Dark Slate Grey', '#2F4F4F');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (35, 'Cyan', 'Dark Turquoise', '#00CED1');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (36, 'Purple', 'Dark Violet', '#9400D3');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (37, 'Pink', 'Deep Pink', '#FF1493');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (38, 'Blue', 'Deep Sky Blue', '#00BFFF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (39, 'Black, Grey', 'Dimgray', '#696969');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (40, 'Blue', 'Dodger blue', '#1E90FF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (41, 'Maroon, Red', 'Firebrick', '#B22222');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (42, 'White', 'Floral White', '#FFFAF0');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (43, 'Green', 'Forest Green', '#228B22');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (44, 'Grey', 'Gainsboro', '#DCDCDC');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (45, 'White', 'Ghost White', '#F8F8FF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (46, 'Gold, Orange', 'Gold', '#FFD700');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (47, 'Gold', 'Golden Brown', '#996515');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (48, 'Gold', 'Golden Yellow', '#FFDF00');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (49, 'Brown, Gold', 'Golden Rod', '#DAA520');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (50, 'Grey, Black', 'Grey', '#808080');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (51, 'Green', 'Green', '#008000');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (52, 'Green, Yellow', 'Green Yellow', '#ADFF2F');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (53, 'White', 'Honeydew', '#F0FFF0');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (54, 'Pink', 'Hotpink', '#FF69B4');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (55, 'Red', 'Indianred', '#CD5C5C');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (56, 'Blue, Purple', 'Indigo', '#4B0082');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (57, 'White', 'Ivory', '#FFFFF0');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (58, 'Gold, Yellow', 'Khaki', '#F0E68C');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (59, 'Blue, Purple', 'Lavender', '#E6E6FA');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (60, 'White', 'Lavender Blush', '#FFF0F5');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (61, 'Green', 'Lawn Green', '#7CFC00');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (62, 'Yellow', 'Lemon Chiffon', '#FFFACD');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (63, 'Blue', 'Light Blue', '#ADD8E6');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (64, 'Red', 'Light Coral', '#F08080');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (65, 'Cyan', 'Light Cyan', '#E0FFFF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (66, 'Gold, Yellow', 'Light Goldenrod Yellow', '#FAFAD2');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (67, 'Grey', 'Light Grey', '#D3D3D3');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (68, 'Green', 'Light Green', '#90EE90');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (69, 'Pink', 'Light Pink', '#FFB6C1');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (70, 'Red', 'Light Salmon', '#FFA07A');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (71, 'Cyan, Green', 'Light Sea Green', '#20B2AA');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (72, 'Blue', 'Light Sky Blue', '#87CEFA');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (73, 'Grey', 'Light Slate Grey', '#778899');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (74, 'Blue', 'Light Steel Blue', '#B0C4DE');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (75, 'Yellow', 'Light Yellow', '#FFFFE0');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (76, 'Green', 'Lime', '#00FF00');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (77, 'Green', 'Lime Green', '#32CD32');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (78, 'White', 'Linen', '#FAF0E6');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (79, 'Purple', 'Magenta', '#FF00FF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (80, 'Brown, Maroon, Red', 'Maroon', '#800000');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (81, 'Cyan', 'Medium Aqua Marine', '#66CDAA');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (82, 'Blue', 'Medium Blue', '#0000CD');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (83, 'Purple', 'Medium Orchid', '#BA55D3');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (84, 'Purple', 'Medium Purple', '#9370DB');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (85, 'Green', 'Medium Sea Green', '#3CB371');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (86, 'Blue', 'Medium Slate Blue', '#7B68EE');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (87, 'Green', 'Medium Spring Green', '#00FA9A');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (88, 'Cyan', 'Medium Turquoise', '#48D1CC');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (89, 'Pink', 'Medium Violet Red', '#C71585');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (90, 'Gold', 'Metallic Gold', '#D4AF37');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (91, 'Blue', 'Midnight Blue', '#191970');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (92, 'White', 'Mint Cream', '#F5FFFA');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (93, 'White', 'Misty Rose', '#FFE4E1');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (94, 'Yellow', 'Moccasin', '#FFE4B5');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (95, 'Brown, White', 'Navajo White', '#FFDEAD');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (96, 'Blue', 'Navy', '#000080');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (97, 'Gold', 'Old Gold', '#CFB53B');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (98, 'White', 'Oldlace', '#FDF5E6');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (99, 'Green, Yellow', 'Olive', '#808000');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (100, 'Green', 'Olive Drab', '#6B8E23');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (101, 'Gold, Orange', 'Orange', '#FFA500');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (102, 'Orange, Red', 'Orange Red', '#FF4500');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (103, 'Purple', 'Orchid', '#DA70D6');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (104, 'Gold', 'Pale Gold', '#E6BE8A');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (105, 'Gold, Yellow', 'Pale Goldenrod', '#EEE8AA');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (106, 'Green', 'Pale Green', '#98FB98');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (107, 'Cyan', 'Pale Turquoise', '#AFEEEE');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (108, 'Pink, Red', 'Pale Violet Red', '#DB7093');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (109, 'Yellow', 'Papaya Whip', '#FFEFD5');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (110, 'Yellow', 'Peach Puff', '#FFDAB9');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (111, 'Brown, Gold', 'Peru', '#CD853F');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (112, 'Pink', 'Pink', '#FFC0CB');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (113, 'Purple', 'Plum', '#DDA0DD');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (114, 'Blue', 'Powder Blue', '#B0E0E6');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (115, 'Purple', 'Purple', '#800080');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (116, 'Red', 'Red', '#FF0000');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (117, 'Brown', 'Rosy Brown', '#BC8F8F');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (118, 'Blue', 'Royal Blue', '#4169E1');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (119, 'Brown, Gold', 'Saddle Brown', '#8B4513');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (120, 'Red', 'Salmon', '#FA8072');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (121, 'Brown', 'Sandy Brown', '#F4A460');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (122, 'Green', 'Sea Green', '#2E8B57');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (123, 'White', 'Sea Shell', '#FFF5EE');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (124, 'Brown, Gold', 'Sienna', '#A0522D');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (125, 'Black, Grey', 'Silver', '#C0C0C0');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (126, 'Blue', 'Sky Blue', '#87CEEB');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (127, 'Blue', 'Slate Blue', '#6A5ACD');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (128, 'Grey', 'Slate Grey', '#708090');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (129, 'White', 'Snow', '#FFFAFA');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (130, 'Green', 'Spring Green', '#00FF7F');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (131, 'Blue', 'Steel Blue', '#4682B4');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (132, 'Brown', 'Tan', '#D2B48C');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (133, 'Cyan', 'Teal', '#008080');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (134, 'Purple', 'Thistle', '#D8BFD8');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (135, 'Orange, Red', 'Tomato', '#FF6347');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (136, 'Cyan', 'Turquoise', '#40E0D0');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (137, 'Gold', 'Vegas Gold', '#C5B358');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (138, 'Purple', 'Violet', '#EE82EE');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (139, 'Brown', 'Wheat', '#F5DEB3');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (140, 'White', 'White', '#FFFFFF');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (141, 'White', 'Whitesmoke', '#F5F5F5');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (142, 'Yellow', 'Yellow', '#FFFF00');
INSERT INTO public.products_colours (id, col_families, name, hex_val) VALUES (143, 'Green, Yellow', 'Yellow Green', '#9ACD32');


--
-- TOC entry 4445 (class 0 OID 712864)
-- Dependencies: 255
-- Data for Name: products_features; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_features (feature_id, name, category_id) VALUES (1, 'Ottoman Storage', 2);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (2, 'Wooden Frame', 2);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (3, 'Metal Frame', 2);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (4, 'Recliner', 4);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (5, 'Corner Sofa', 4);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (6, '3 Seater Sofa', 4);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (7, '2 Seater Sofas', 4);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (8, '4 Seater Sofas', 4);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (9, 'Fitted Storage', 5);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (10, 'Foldable', 3);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (11, '8 Seats', 3);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (12, 'Metal', 6);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (13, 'Outdoors', 3);
INSERT INTO public.products_features (feature_id, name, category_id) VALUES (14, 'Oak', 6);


--
-- TOC entry 4447 (class 0 OID 712869)
-- Dependencies: 257
-- Data for Name: products_linkedproducts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (5, 11, 'colour', 12);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (6, 11, 'colour', 13);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (7, 11, 'set', 15);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (8, 11, 'similar', 20);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (9, 11, 'similar', 12);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (10, 11, 'similar', 14);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (11, 11, 'colour', 2);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (12, 11, 'similar', 7);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (13, 11, 'similar', 20);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (14, 11, 'similar', 16);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (15, 11, 'set', 9);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (16, 11, 'set', 14);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (17, 11, 'set', 2);
INSERT INTO public.products_linkedproducts (id, product_id, relation_id, related_product_id) VALUES (18, 11, 'set', 1);


--
-- TOC entry 4449 (class 0 OID 712874)
-- Dependencies: 259
-- Data for Name: products_productfeatures; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_productfeatures (id, feature_id, product_id) VALUES (1, 2, 11);
INSERT INTO public.products_productfeatures (id, feature_id, product_id) VALUES (2, 1, 11);


--
-- TOC entry 4451 (class 0 OID 712879)
-- Dependencies: 261
-- Data for Name: products_productreviews; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_productreviews (id, rating, comments, review_date, product_id, store_id, user_id, review_title) VALUES (8, 5, 'Great quality and fast delivery.', '2020-02-08 23:22:06+00', 11, 1, 8, 'It''s amazing!');
INSERT INTO public.products_productreviews (id, rating, comments, review_date, product_id, store_id, user_id, review_title) VALUES (9, 5, 'Was exactly as decribed. Delivery was on time and the guys doing the fitting where professional and had the job completed in no time!', '2020-02-09 21:36:17+00', 13, 1, 1, 'Perfect');
INSERT INTO public.products_productreviews (id, rating, comments, review_date, product_id, store_id, user_id, review_title) VALUES (4, 4, 'Does what it says on the tin, can''t complain.', '2020-02-02 00:10:32+00', 11, 1, 7, 'Alright');
INSERT INTO public.products_productreviews (id, rating, comments, review_date, product_id, store_id, user_id, review_title) VALUES (2, 5, NULL, '2020-01-31 21:37:23+00', 11, 1, 4, NULL);
INSERT INTO public.products_productreviews (id, rating, comments, review_date, product_id, store_id, user_id, review_title) VALUES (1, 4, 'Delivered right on time, and the product is of a great quality.', '2020-01-31 21:37:02+00', 11, 1, 6, 'Great Service Highly recommend');


--
-- TOC entry 4453 (class 0 OID 712887)
-- Dependencies: 263
-- Data for Name: products_products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (124, 'Bed 12', false, '4', 68, 64, 77, 33, '3', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-6.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 234, -1, 0, '2020-02-09 23:17:33.672448+00', NULL, 76, true, 11, 'Active', 2, 9, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (125, 'Bed 13', false, '5', 38, 96, 65, 67, '1', NULL, '/static/img/products/compressed/resized_bed-7.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-9.jpg', '/static/img/products/compressed/resized_bed-9.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 238, -1, 0, '2020-02-09 23:17:33.743023+00', NULL, 46, true, 11, 'Active', 2, 116, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (153, 'Dining Table 1', true, '11', 63, 77, 10, 84, '10', NULL, '/static/img/products/compressed/resized_dining-table-1.jpg', '/static/img/products/compressed/resized_dining-table-2.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 122, -1, 0, '2020-02-09 23:17:36.139341+00', NULL, 37, true, 0, 'Active', 3, 101, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (1, 'Bed 1 Col 1', true, '1', 78, 44, 39, 45, '1', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/dummy/2.jpg', '/static/dummy/3.jpg', '/static/dummy/4.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 258, -1, 0, '2019-12-24 20:43:05.965938+00', NULL, 74, true, 2, 'Active', 2, 7, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (126, 'Bed 14', false, '6', 46, 43, 13, 41, '2', NULL, '/static/img/products/compressed/resized_bed-9.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-9.jpg', '/static/img/products/compressed/resized_bed-9.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 406, -1, 0, '2020-02-09 23:17:33.840726+00', NULL, 55, true, 28, 'Active', 2, 112, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (4, 'Bed 1 Col 4', false, '4', 77, 70, 65, 16, '1', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/dummy/2.jpg', '/static/dummy/3.jpg', '/static/dummy/4.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 478, -1, 0, '2019-12-24 20:43:06.315169+00', NULL, 78, true, 43, 'Active', 2, 112, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (5, 'Bed 1 Col 5', false, '5', 99, 43, 64, 39, '2', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/dummy/2.jpg', '/static/dummy/3.jpg', '/static/dummy/4.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 182, -1, 0, '2019-12-24 20:43:06.459265+00', NULL, 77, true, 42, 'Active', 2, 101, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (179, 'Shelf 10', false, '12', 49, 83, 58, 86, '14', NULL, '/static/img/products/compressed/resized_shelves-18.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 159, -1, 0, '2020-02-09 23:17:38.716012+00', NULL, 41, true, 3, 'Active', 6, 116, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (127, 'Bed 15', false, '1', 41, 28, 80, 81, '3', NULL, '/static/img/products/compressed/resized_bed-9.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-7.jpg', '/static/img/products/compressed/resized_bed-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 199, -1, 0, '2020-02-09 23:17:33.920795+00', NULL, 47, true, 33, 'Active', 2, 101, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (128, 'Bed 16', true, '6', 26, 69, 15, 63, '1', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-6.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 188, -1, 0, '2020-02-09 23:17:34.012651+00', NULL, 79, true, 33, 'Active', 2, 7, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (168, 'Kitchen Shelf 1', true, '11', 69, 95, 86, 56, '12', NULL, '/static/img/products/compressed/resized_kitchen-shelves-3.jpg', '/static/img/products/compressed/resized_kitchen-shevles-1.jpg', '/static/img/products/compressed/resized_kitchen-shevles-1.jpg', '', '', '', '', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 194, -1, 0, '2020-02-09 23:17:37.739736+00', NULL, 86, true, 50, 'Active', 3, 7, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (2, 'Bed 1 Col 2', false, '2', 97, 50, 35, 81, '2', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '', '', '', '', '', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 283, -1, 0, '2019-12-24 20:43:06.054997+00', NULL, 67, true, 17, 'Active', 2, 9, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (117, 'Bed 5', false, '5', 56, 69, 100, 29, '2', NULL, '/static/img/products/compressed/resized_bed-11.jpg', '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-1.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 163, -1, 0, '2020-02-09 23:17:33.066833+00', NULL, 48, true, 25, 'Active', 2, 101, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (129, 'Bed 17', false, '1', 56, 29, 89, 73, '2', NULL, '/static/img/products/compressed/resized_bed-9.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-5.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 397, -1, 0, '2020-02-09 23:17:34.09639+00', NULL, 37, true, 26, 'Active', 2, 9, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (130, 'Bed 18', false, '2', 31, 23, 98, 29, '3', NULL, '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 221, -1, 0, '2020-02-09 23:17:34.180022+00', NULL, 84, true, 22, 'Active', 2, 116, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (121, 'Bed 9', false, '1', 41, 52, 11, 86, '3', NULL, '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-6.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 423, -1, 0, '2020-02-09 23:17:33.412664+00', NULL, 17, true, 38, 'Active', 2, 112, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (154, 'Dining Table 2', false, '11', 95, 89, 47, 10, '10', NULL, '/static/img/products/compressed/resized_dining-table-2.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 106, -1, 0, '2020-02-09 23:17:36.496727+00', NULL, 69, true, 45, 'Active', 3, 7, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (14, 'Bed 3 Col 4', false, '6', 26, 21, 61, 81, '2', NULL, '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-10.jpg', '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 337, -1, 0, '2019-12-24 20:43:07.516965+00', NULL, 84, true, 2, 'Active', 2, 112, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (115, 'Bed 3', false, '6', 49, 55, 50, 62, '3', NULL, '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-10.jpg', '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 270, -1, 0, '2020-02-09 23:17:32.895575+00', NULL, 71, true, 20, 'Active', 2, 116, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (15, 'Bed 3 Col 5', false, '1,2', 37, 31, 69, 70, '3', NULL, '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-10.jpg', '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 468, -1, 0, '2019-12-24 20:43:07.645049+00', NULL, 91, true, 11, 'Active', 2, 101, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (12, 'Bed 3 Col 2', false, '4', 51, 41, 49, 31, '3', NULL, '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-10.jpg', '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 374, -1, 0, '2019-12-24 20:43:07.270801+00', NULL, 86, true, 48, 'Active', 2, 9, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (13, 'Bed 3 Col 3', false, '5', 13, 20, 39, 58, '1', NULL, '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-10.jpg', '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 75, -1, 0, '2019-12-24 20:43:07.392883+00', NULL, 23, true, 10, 'Active', 2, 116, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (11, 'Bed 3 Col 1', true, '6', 54, 29, 75, 22, '2', NULL, '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-10.jpg', '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 144, -1, 0, '2019-12-24 20:43:07+00', NULL, 74, true, 39, 'Active', 2, 7, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (155, 'Dining Table 3', false, '11', 59, 28, 17, 71, '10', NULL, '/static/img/products/compressed/resized_dining-table-9.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 485, -1, 0, '2020-02-09 23:17:36.600847+00', NULL, 28, true, 24, 'Active', 3, 9, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (170, 'Shelf 1', true, '12', 10, 59, 13, 94, '14', NULL, '/static/img/products/compressed/resized_shelves-1.jpg', '/static/img/products/compressed/resized_shelves-2.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 304, -1, 0, '2020-02-09 23:17:37.916439+00', NULL, 87, true, 28, 'Active', 6, 9, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (156, 'Dining Table 4', false, '11', 83, 71, 19, 70, '10', NULL, '/static/img/products/compressed/resized_dining-table-10.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 489, -1, 0, '2020-02-09 23:17:36.70861+00', NULL, 16, true, 34, 'Active', 3, 116, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (171, 'Shelf 2', false, '12', 78, 90, 72, 17, '14', NULL, '/static/img/products/compressed/resized_shelves-2.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 275, -1, 0, '2020-02-09 23:17:38.002597+00', NULL, 21, true, 18, 'Active', 6, 116, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (169, 'Outdoors Table 1', true, '14', 28, 29, 52, 19, '13', NULL, '/static/img/products/compressed/resized_outdoors-table-1.jpg', '/static/img/products/compressed/resized_outdoors-table-1.jpg', '/static/img/products/compressed/resized_outdoors-table-1.jpg', '/static/img/products/compressed/resized_outdoors-table-1.jpg', '/static/img/products/compressed/resized_outdoors-table-1.jpg', '/static/img/products/compressed/resized_outdoors-table-1.jpg', '/static/img/products/compressed/resized_outdoors-table-1.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 411, -1, 0, '2020-02-09 23:17:37.826207+00', NULL, 60, true, 28, 'Active', 3, 7, 'Outdoors', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (157, 'Dining Table 5', false, '11', 24, 66, 56, 99, '10', NULL, '/static/img/products/compressed/resized_dining-table-11.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 223, -1, 0, '2020-02-09 23:17:36.791682+00', NULL, 76, true, 10, 'Active', 3, 112, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (158, 'Dining Table 6', true, '11', 80, 35, 59, 45, '10', NULL, '/static/img/products/compressed/resized_dining-table-12.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 167, -1, 0, '2020-02-09 23:17:36.881667+00', NULL, 60, true, 40, 'Active', 3, 101, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (159, 'Dining Table 7', false, '11', 92, 13, 93, 76, '10', NULL, '/static/img/products/compressed/resized_dining-table-13.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 403, -1, 0, '2020-02-09 23:17:36.965464+00', NULL, 33, true, 22, 'Active', 3, 7, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (160, 'Dining Table 8', false, '11', 75, 48, 84, 12, '10', NULL, '/static/img/products/compressed/resized_dining-table-14.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 258, -1, 0, '2020-02-09 23:17:37.047912+00', NULL, 78, true, 2, 'Active', 3, 9, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (161, 'Dining Table 9', false, '11', 84, 98, 73, 67, '10', NULL, '/static/img/products/compressed/resized_dining-table-15.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 480, -1, 0, '2020-02-09 23:17:37.13628+00', NULL, 99, true, 3, 'Active', 3, 116, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (131, 'Bed 19', false, '6', 39, 34, 84, 86, '1', NULL, '/static/img/products/compressed/resized_bed-11.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-1.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 150, -1, 0, '2020-02-09 23:17:34.268408+00', NULL, 31, true, 43, 'Active', 2, 112, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (19, 'Bed 4 Col 4', false, '6', 13, 22, 56, 99, '1', NULL, '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 312, -1, 0, '2019-12-24 20:43:08.256454+00', NULL, 53, true, 47, 'Active', 2, 112, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (20, 'Bed 4 Col 5', false, '4', 100, 19, 35, 29, '2', NULL, '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 279, -1, 0, '2019-12-24 20:43:08.375533+00', NULL, 54, true, 20, 'Active', 2, 101, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (16, 'Bed 4 Col 1', true, '6,4,5', 99, 94, 50, 61, '1', NULL, '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 238, -1, 0, '2019-12-24 20:43:07.793147+00', NULL, 72, true, 28, 'Active', 2, 7, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (17, 'Bed 4 Col 2', false, '1', 31, 81, 55, 19, '2', NULL, '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 143, -1, 0, '2019-12-24 20:43:07.932239+00', NULL, 55, true, 23, 'Active', 2, 9, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (18, 'Bed 4 Col 3', false, '2', 77, 66, 33, 66, '3', NULL, '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 131, -1, 0, '2019-12-24 20:43:08.125367+00', NULL, 50, true, 29, 'Active', 2, 116, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (21, 'Bed 5 Col 1', true, '5', 58, 67, 73, 12, '3', NULL, '/static/img/products/compressed/resized_bed-11.jpg', '/static/dummy/1.jpg', '/static/dummy/2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 330, -1, 0, '2019-12-24 20:43:08.504618+00', NULL, 14, true, 28, 'Active', 2, 7, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (113, 'Bed 1', true, '1', 23, 80, 34, 98, '1', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '', '', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 310, -1, 0, '2020-02-09 23:17:32+00', NULL, 49, true, 36, 'Active', 2, 7, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (25, 'Bed 5 Col 5', false, '6', 97, 33, 34, 42, '1', NULL, '/static/img/products/compressed/resized_bed-11.jpg', '/static/dummy/1.jpg', '/static/dummy/2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 424, -1, 0, '2019-12-24 20:43:08.99094+00', NULL, 94, true, 7, 'Active', 2, 101, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (22, 'Bed 5 Col 2', false, '6', 82, 13, 100, 19, '1', NULL, '/static/img/products/compressed/resized_bed-11.jpg', '/static/dummy/1.jpg', '/static/dummy/2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 207, -1, 0, '2019-12-24 20:43:08.635705+00', NULL, 76, true, 13, 'Active', 2, 9, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (23, 'Bed 5 Col 3', false, '1,2', 17, 42, 15, 92, '2', NULL, '/static/img/products/compressed/resized_bed-11.jpg', '/static/dummy/1.jpg', '/static/dummy/2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 289, -1, 0, '2019-12-24 20:43:08.754783+00', NULL, 33, true, 24, 'Active', 2, 116, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (24, 'Bed 5 Col 4', false, '6,4,5', 73, 32, 23, 97, '3', NULL, '/static/img/products/compressed/resized_bed-11.jpg', '/static/dummy/1.jpg', '/static/dummy/2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 55, -1, 0, '2019-12-24 20:43:08.877865+00', NULL, 95, true, 48, 'Active', 2, 112, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (172, 'Shelf 3', false, '12', 22, 16, 76, 84, '14', NULL, '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 221, -1, 0, '2020-02-09 23:17:38.096152+00', NULL, 100, true, 29, 'Active', 6, 112, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (162, 'Dining Table 10', false, '11', 16, 84, 84, 89, '10', NULL, '/static/img/products/compressed/resized_dining-table-1.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 255, -1, 0, '2020-02-09 23:17:37.221841+00', NULL, 40, true, 26, 'Active', 3, 112, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (6, 'Bed 2 Col 1', true, '6', 35, 68, 61, 78, '3', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 87, -1, 0, '2019-12-24 20:43:06.569337+00', NULL, 94, true, 0, 'Active', 2, 7, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (118, 'Bed 6', true, '6', 12, 83, 71, 70, '3', NULL, '/static/img/products/compressed/resized_bed-9.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-9.jpg', '/static/img/products/compressed/resized_bed-9.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 301, -1, 0, '2020-02-09 23:17:33.154218+00', NULL, 39, true, 34, 'Active', 2, 7, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (163, 'Dining Table 11', true, '11', 16, 26, 56, 49, '10', NULL, '/static/img/products/compressed/resized_dining-table-2.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 498, -1, 0, '2020-02-09 23:17:37.309699+00', NULL, 29, true, 26, 'Active', 3, 101, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (119, 'Bed 7', false, '1', 85, 69, 100, 90, '1', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-1.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 486, -1, 0, '2020-02-09 23:17:33.242854+00', NULL, 18, true, 41, 'Active', 2, 9, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (164, 'Dining Table 12', false, '11', 55, 46, 45, 52, '10', NULL, '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 363, -1, 0, '2020-02-09 23:17:37.388448+00', NULL, 66, true, 13, 'Active', 3, 7, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (165, 'Dining Table 13', false, '11', 63, 56, 91, 71, '10', NULL, '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 162, -1, 0, '2020-02-09 23:17:37.470019+00', NULL, 51, true, 46, 'Active', 3, 9, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (173, 'Shelf 4', false, '12', 45, 94, 50, 64, '14', NULL, '/static/img/products/compressed/resized_shelves-2.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 388, -1, 0, '2020-02-09 23:17:38.204756+00', NULL, 89, true, 50, 'Active', 6, 101, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (120, 'Bed 8', false, '6', 86, 34, 58, 61, '2', NULL, '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-5.jpg', '/static/img/products/compressed/resized_bed-5.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 120, -1, 0, '2020-02-09 23:17:33.322993+00', NULL, 66, true, 41, 'Active', 2, 116, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (137, 'Bed 25', false, '6', 18, 86, 93, 31, '1', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 113, -1, 0, '2020-02-09 23:17:34.785043+00', NULL, 90, true, 1, 'Active', 2, 101, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (9, 'Bed 2 Col 4', false, '1', 61, 32, 21, 21, '3', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 431, -1, 0, '2019-12-24 20:43:06.912565+00', NULL, 80, true, 12, 'Active', 2, 112, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (7, 'Bed 2 Col 2', false, '1,2', 21, 50, 82, 65, '1', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 297, -1, 0, '2019-12-24 20:43:06.657395+00', NULL, 68, true, 12, 'Active', 2, 9, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (134, 'Bed 22', false, '6', 17, 24, 78, 46, '1', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-9.jpg', '/static/img/products/compressed/resized_bed-9.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 391, -1, 0, '2020-02-09 23:17:34.536402+00', NULL, 34, true, 50, 'Active', 2, 9, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (8, 'Bed 2 Col 3', false, '6,4,5', 20, 65, 87, 56, '2', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 386, -1, 0, '2019-12-24 20:43:06.792485+00', NULL, 79, true, 1, 'Active', 2, 116, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (133, 'Bed 21', true, '5', 76, 80, 47, 96, '3', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-7.jpg', '/static/img/products/compressed/resized_bed-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 90, -1, 0, '2020-02-09 23:17:34.448725+00', NULL, 47, true, 35, 'Active', 2, 7, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (10, 'Bed 2 Col 5', false, '2', 82, 25, 51, 89, '1', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/dummy/5.jpg', '/static/dummy/10.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 172, -1, 0, '2019-12-24 20:43:07.035646+00', NULL, 11, true, 18, 'Active', 2, 101, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (114, 'Bed 2', false, '2', 88, 77, 88, 40, '2', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 262, -1, 0, '2020-02-09 23:17:32.811806+00', NULL, 37, true, 3, 'Active', 2, 9, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (135, 'Bed 23', false, '1', 35, 14, 63, 35, '2', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-2.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 75, -1, 0, '2020-02-09 23:17:34.607111+00', NULL, 69, true, 47, 'Active', 2, 116, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (136, 'Bed 24', false, '6', 11, 37, 24, 29, '3', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-4.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 376, -1, 0, '2020-02-09 23:17:34.702179+00', NULL, 97, true, 32, 'Active', 2, 112, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (132, 'Bed 20', false, '4', 74, 48, 31, 97, '2', NULL, '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-3.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 407, -1, 0, '2020-02-09 23:17:34.361309+00', NULL, 16, true, 9, 'Active', 2, 101, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (167, 'Dining Table 15', false, '11', 96, 93, 18, 45, '10', NULL, '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 493, -1, 0, '2020-02-09 23:17:37.650241+00', NULL, 87, true, 47, 'Active', 3, 112, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (166, 'Dining Table 14', false, '11', 13, 54, 11, 26, '10', NULL, '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-3.jpg', '/static/img/products/compressed/resized_dining-table-8.jpg', '/static/img/products/compressed/resized_dining-table-4.jpg', '/static/img/products/compressed/resized_dining-table-5.jpg', '/static/img/products/compressed/resized_dining-table-6.jpg', '/static/img/products/compressed/resized_dining-table-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 159, -1, 0, '2020-02-09 23:17:37.566936+00', NULL, 12, true, 7, 'Active', 3, 116, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (122, 'Bed 10', false, '2', 57, 78, 95, 91, '1', NULL, '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-2.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 496, -1, 0, '2020-02-09 23:17:33.499573+00', NULL, 90, true, 50, 'Active', 2, 101, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (123, 'Bed 11', true, '6', 16, 83, 11, 96, '2', NULL, '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-1.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 113, -1, 0, '2020-02-09 23:17:33.589827+00', NULL, 98, true, 46, 'Active', 2, 7, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (174, 'Shelf 5', false, '12', 15, 53, 95, 36, '14', NULL, '/static/img/products/compressed/resized_shelves-13.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 60, -1, 0, '2020-02-09 23:17:38.290818+00', NULL, 44, true, 19, 'Active', 6, 7, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (175, 'Shelf 6', true, '12', 19, 12, 38, 21, '14', NULL, '/static/img/products/compressed/resized_shelves-14.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 252, -1, 0, '2020-02-09 23:17:38.368019+00', NULL, 53, true, 3, 'Active', 6, 9, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (176, 'Shelf 7', false, '12', 32, 100, 75, 32, '14', NULL, '/static/img/products/compressed/resized_shelves-15.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 264, -1, 0, '2020-02-09 23:17:38.45049+00', NULL, 19, true, 46, 'Active', 6, 116, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (177, 'Shelf 8', false, '12', 35, 24, 38, 98, '14', NULL, '/static/img/products/compressed/resized_shelves-16.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 411, -1, 0, '2020-02-09 23:17:38.541218+00', NULL, 74, true, 27, 'Active', 6, 112, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (182, 'Sofa 3', false, '7', 93, 44, 97, 94, '4', NULL, '/static/img/products/compressed/resized_sofa-22.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 220, -1, 0, '2020-02-09 23:17:38.978537+00', NULL, 13, true, 24, 'Active', 4, 7, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (178, 'Shelf 9', false, '12', 43, 89, 58, 65, '14', NULL, '/static/img/products/compressed/resized_shelves-17.jpg', '/static/img/products/compressed/resized_shelves-3.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', '/static/img/products/compressed/resized_shelves-4.jpg', '/static/img/products/compressed/resized_shelves-5.jpg', '/static/img/products/compressed/resized_shelves-6.jpg', '/static/img/products/compressed/resized_shelves-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 459, -1, 0, '2020-02-09 23:17:38.629897+00', NULL, 21, true, 2, 'Active', 6, 9, 'Kitchen', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (183, 'Sofa 4', false, '8', 37, 92, 79, 71, '6', NULL, '/static/img/products/compressed/resized_sofa-15.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 439, -1, 0, '2020-02-09 23:17:39.070981+00', NULL, 67, true, 38, 'Active', 4, 9, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (184, 'Sofa 5', false, '7', 20, 73, 39, 71, '7', NULL, '/static/img/products/compressed/resized_sofa-39.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 97, -1, 0, '2020-02-09 23:17:39.156133+00', NULL, 12, true, 11, 'Active', 4, 116, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (185, 'Sofa 6', true, '8', 43, 64, 13, 86, '8', NULL, '/static/img/products/compressed/resized_sofa-32.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 247, -1, 0, '2020-02-09 23:17:39.245495+00', NULL, 89, true, 50, 'Active', 4, 112, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (186, 'Sofa 7', false, '7', 27, 61, 72, 97, '8', NULL, '/static/img/products/compressed/resized_sofa-19.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 54, -1, 0, '2020-02-09 23:17:39.4086+00', NULL, 20, true, 11, 'Active', 4, 101, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (187, 'Sofa 8', false, '8', 11, 22, 43, 65, '4', NULL, '/static/img/products/compressed/resized_sofa-9.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 210, -1, 0, '2020-02-09 23:17:39.539339+00', NULL, 95, true, 29, 'Active', 4, 7, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (188, 'Sofa 9', false, '7', 83, 62, 38, 41, '4', NULL, '/static/img/products/compressed/resized_sofa-18.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 217, -1, 0, '2020-02-09 23:17:39.677+00', NULL, 33, true, 1, 'Active', 4, 9, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (189, 'Sofa 10', false, '8', 75, 41, 31, 29, '5', NULL, '/static/img/products/compressed/resized_sofa-22.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 366, -1, 0, '2020-02-09 23:17:39.786815+00', NULL, 32, true, 48, 'Active', 4, 116, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (190, 'Sofa 11', true, '7', 27, 15, 16, 65, '4', NULL, '/static/img/products/compressed/resized_sofa-24.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 343, -1, 0, '2020-02-09 23:17:39.875765+00', NULL, 42, true, 7, 'Active', 4, 112, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (191, 'Sofa 12', true, '8', 19, 67, 27, 80, '6', NULL, '/static/img/products/compressed/resized_sofa-32.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 411, -1, 0, '2020-02-09 23:17:39.965384+00', NULL, 29, true, 35, 'Active', 4, 9, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (192, 'Sofa 13', true, '7', 64, 83, 46, 94, '7', NULL, '/static/img/products/compressed/resized_sofa-41.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 483, -1, 0, '2020-02-09 23:17:40.050432+00', NULL, 57, true, 9, 'Active', 4, 116, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (193, 'Sofa 14', true, '8', 14, 99, 100, 96, '4', NULL, '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 442, -1, 0, '2020-02-09 23:17:40.137766+00', NULL, 89, true, 18, 'Active', 4, 112, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (194, 'Sofa 15', false, '7', 30, 13, 89, 53, '5', NULL, '/static/img/products/compressed/resized_sofa-28.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 316, -1, 0, '2020-02-09 23:17:40.214196+00', NULL, 48, true, 44, 'Active', 4, 101, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (195, 'Sofa 16', false, '8', 23, 52, 15, 20, '6', NULL, '/static/img/products/compressed/resized_sofa-37.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 214, -1, 0, '2020-02-09 23:17:40.299552+00', NULL, 50, true, 42, 'Active', 4, 7, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (196, 'Sofa 17', false, '7', 83, 42, 77, 76, '6', NULL, '/static/img/products/compressed/resized_sofa-26.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 116, -1, 0, '2020-02-09 23:17:40.383087+00', NULL, 97, true, 4, 'Active', 4, 9, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (197, 'Sofa 18', false, '8', 40, 90, 47, 86, '7', NULL, '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 387, -1, 0, '2020-02-09 23:17:40.467072+00', NULL, 20, true, 39, 'Active', 4, 116, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (180, 'Sofa 1', true, '7', 37, 63, 73, 46, '4', NULL, '/static/img/products/compressed/resized_sofa-30.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 362, -1, 0, '2020-02-09 23:17:38.801743+00', NULL, 66, true, 34, 'Active', 4, 112, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (181, 'Sofa 2', false, '8', 86, 91, 30, 32, '5', NULL, '/static/img/products/compressed/resized_sofa-7.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 385, -1, 0, '2020-02-09 23:17:38.884947+00', NULL, 54, true, 36, 'Active', 4, 101, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (198, 'Sofa 19', true, '7', 85, 48, 74, 55, '8', NULL, '/static/img/products/compressed/resized_sofa-30.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 151, -1, 0, '2020-02-09 23:17:40.548582+00', NULL, 91, true, 7, 'Active', 4, 112, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (199, 'Sofa 20', false, '8', 90, 21, 31, 73, '8', NULL, '/static/img/products/compressed/resized_sofa-33.jpg', '/static/img/products/compressed/resized_sofa-2.jpg', '/static/img/products/compressed/resized_sofa-3.jpg', '/static/img/products/compressed/resized_sofa-4.jpg', '/static/img/products/compressed/resized_sofa-5.jpg', '/static/img/products/compressed/resized_sofa-6.jpg', '/static/img/products/compressed/resized_sofa-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 495, -1, 0, '2020-02-09 23:17:40.63571+00', NULL, 43, true, 39, 'Active', 4, 7, 'Living Room', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (3, 'Bed 1 Col 3', false, '6', 74, 43, 93, 46, '3', NULL, '/static/img/products/compressed/resized_bed-1.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/dummy/2.jpg', '', '', '', '', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 220, -1, 0, '2019-12-24 20:43:06.186084+00', NULL, 92, true, 40, 'Active', 2, 116, 'Bedroom', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (138, 'Computer Desk 1', true, '9', 95, 15, 60, 84, '9', NULL, '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 151, -1, 0, '2020-02-09 23:17:34.864359+00', NULL, 26, true, 31, 'Active', 5, 7, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (139, 'Computer Desk 2', false, '9', 44, 54, 51, 16, '9', NULL, '/static/img/products/compressed/resized_desk-32.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 255, -1, 0, '2020-02-09 23:17:34.948607+00', NULL, 35, true, 3, 'Active', 5, 9, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (140, 'Computer Desk 3', false, '9', 27, 34, 94, 59, '9', NULL, '/static/img/products/compressed/resized_desk-23.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 195, -1, 0, '2020-02-09 23:17:35.047551+00', NULL, 83, true, 49, 'Active', 5, 116, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (141, 'Computer Desk 4', false, '9', 79, 83, 19, 75, '9', NULL, '/static/img/products/compressed/resized_desk-1.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 242, -1, 0, '2020-02-09 23:17:35.124889+00', NULL, 88, true, 35, 'Active', 5, 112, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (142, 'Computer Desk 5', false, '9', 27, 51, 43, 25, '9', NULL, '/static/img/products/compressed/resized_desk-23.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 126, -1, 0, '2020-02-09 23:17:35.215061+00', NULL, 82, true, 50, 'Active', 5, 101, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (143, 'Computer Desk 6', true, '9', 37, 84, 10, 96, '9', NULL, '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 406, -1, 0, '2020-02-09 23:17:35.303562+00', NULL, 22, true, 31, 'Active', 5, 7, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (116, 'Bed 4', false, '4', 21, 68, 75, 90, '1', NULL, '/static/img/products/compressed/resized_bed-8.jpg', '/static/img/products/compressed/resized_bed-3.jpg', '/static/img/products/compressed/resized_bed-2.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-6.jpg', '/static/img/products/compressed/resized_bed-4.jpg', '/static/img/products/compressed/resized_bed-4.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 153, -1, 0, '2020-02-09 23:17:32.987495+00', NULL, 98, true, 3, 'Active', 2, 112, 'Bedroom', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (144, 'Computer Desk 7', false, '9', 71, 63, 83, 31, '9', NULL, '/static/img/products/compressed/resized_desk-23.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 175, -1, 0, '2020-02-09 23:17:35.374326+00', NULL, 45, true, 50, 'Active', 5, 9, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (145, 'Computer Desk 8', false, '9', 61, 22, 27, 65, '9', NULL, '/static/img/products/compressed/resized_desk-32.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 225, -1, 0, '2020-02-09 23:17:35.466845+00', NULL, 44, true, 3, 'Active', 5, 116, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (146, 'Computer Desk 9', false, '9', 29, 40, 32, 90, '9', NULL, '/static/img/products/compressed/resized_desk-17.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 250, -1, 0, '2020-02-09 23:17:35.54812+00', NULL, 56, true, 48, 'Active', 5, 112, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (147, 'Computer Desk 10', false, '9', 14, 94, 14, 16, '9', NULL, '/static/img/products/compressed/resized_desk-3.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 279, -1, 0, '2020-02-09 23:17:35.635212+00', NULL, 88, true, 14, 'Active', 5, 101, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (148, 'Computer Desk 11', true, '9', 34, 45, 14, 36, '9', NULL, '/static/img/products/compressed/resized_desk-17.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 319, -1, 0, '2020-02-09 23:17:35.72013+00', NULL, 61, true, 23, 'Active', 5, 7, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (149, 'Computer Desk 12', false, '9', 31, 42, 90, 17, '9', NULL, '/static/img/products/compressed/resized_desk-31.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 339, -1, 0, '2020-02-09 23:17:35.807822+00', NULL, 22, true, 48, 'Active', 5, 9, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (150, 'Computer Desk 13', false, '9', 99, 54, 54, 67, '9', NULL, '/static/img/products/compressed/resized_desk-7.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 105, -1, 0, '2020-02-09 23:17:35.896424+00', NULL, 40, true, 12, 'Active', 5, 116, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (151, 'Computer Desk 14', false, '9', 17, 11, 98, 82, '9', NULL, '/static/img/products/compressed/resized_desk-12.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 369, -1, 0, '2020-02-09 23:17:35.979183+00', NULL, 28, true, 12, 'Active', 5, 112, 'Office', 1, 'cm', 'cm', 'kg', 'cm');
INSERT INTO public.products_products (product_id, name, main_colour, sub_categories, height, length, width, weight, features, related, showcase_image, image_1, image_2, image_3, image_4, image_5, image_6, description, price, rating, ratings, upload_date, last_purchase_date, inventory, delivery_available, delivery_price, status, category_id, colour_id, room_id, store_id, height_units, length_units, weight_units, width_units) VALUES (152, 'Computer Desk 15', false, '9', 94, 94, 93, 58, '9', NULL, '/static/img/products/compressed/resized_desk-1.jpg', '/static/img/products/compressed/resized_desk-10.jpg', '/static/img/products/compressed/resized_desk-8.jpg', '/static/img/products/compressed/resized_desk-4.jpg', '/static/img/products/compressed/resized_desk-5.jpg', '/static/img/products/compressed/resized_desk-6.jpg', '/static/img/products/compressed/resized_desk-7.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 493, -1, 0, '2020-02-09 23:17:36.056686+00', NULL, 15, true, 9, 'Active', 5, 101, 'Office', 1, 'cm', 'cm', 'kg', 'cm');


--
-- TOC entry 4455 (class 0 OID 712895)
-- Dependencies: 265
-- Data for Name: products_relationtype; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_relationtype (relation) VALUES ('colour');
INSERT INTO public.products_relationtype (relation) VALUES ('similar');
INSERT INTO public.products_relationtype (relation) VALUES ('set');


--
-- TOC entry 4456 (class 0 OID 712898)
-- Dependencies: 266
-- Data for Name: products_rooms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_rooms (name) VALUES ('Bedroom');
INSERT INTO public.products_rooms (name) VALUES ('Living Room');
INSERT INTO public.products_rooms (name) VALUES ('Kitchen');
INSERT INTO public.products_rooms (name) VALUES ('Dinning Room');
INSERT INTO public.products_rooms (name) VALUES ('Bathroom');
INSERT INTO public.products_rooms (name) VALUES ('Office');
INSERT INTO public.products_rooms (name) VALUES ('Outdoors');


--
-- TOC entry 4457 (class 0 OID 712901)
-- Dependencies: 267
-- Data for Name: products_subcategories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products_subcategories (id, name, category_id) VALUES (1, 'Single Beds', 2);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (2, 'Double Bed', 2);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (3, 'Queen Bed', 2);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (4, 'King Beds', 2);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (5, 'Sofa Beds', 2);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (6, 'Bunk Beds', 2);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (7, 'Fabric Sofas', 4);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (8, 'Leather Sofas', 4);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (9, 'Computer Desk', 5);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (10, 'Computer Desk', 3);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (11, 'Dining Table', 3);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (12, 'Shelf', 6);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (13, 'Bookcase', 6);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (14, 'Outdoors', 3);
INSERT INTO public.products_subcategories (id, name, category_id) VALUES (15, 'Outdoors', 4);


--
-- TOC entry 4470 (class 0 OID 827385)
-- Dependencies: 280
-- Data for Name: sales_deliveraddresses; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4459 (class 0 OID 712906)
-- Dependencies: 269
-- Data for Name: sales_invoices; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4461 (class 0 OID 712914)
-- Dependencies: 271
-- Data for Name: sales_sales; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sales_sales (sale_id, delivery_price, assembly_price, ex_vat, vat, total, product_id, store_id, transaction_ref, address_line_1, address_line_2, city_id, country_id, delivered_on, delivery_from, delivery_included, delivery_to, ordered_on, payment_method, postcode, quantity, recipient, return_by, returned_allowed, returned_on, status, tracking_ref, user_id) VALUES (1, 30, 20, 20, 20, 90, 11, 1, 'test1', 'Holiday Inn Whitechapel', '5 Cavell Street', 25, 'GBR', '2020-02-08 22:38:02+00', '2020-02-08 22:38:20+00', true, '2020-02-08 22:38:27+00', '2020-02-08 22:37:46+00', 'Visa', 'E1 2BP', 1, 'Shaikhuls Mum and Dad', NULL, false, NULL, 'Delivered', NULL, 8);
INSERT INTO public.sales_sales (sale_id, delivery_price, assembly_price, ex_vat, vat, total, product_id, store_id, transaction_ref, address_line_1, address_line_2, city_id, country_id, delivered_on, delivery_from, delivery_included, delivery_to, ordered_on, payment_method, postcode, quantity, recipient, return_by, returned_allowed, returned_on, status, tracking_ref, user_id) VALUES (2, 30, 30, 30, 30, 30, 13, 1, 'test23012020214600', 'a', '2222', 25, 'ARE', '2020-02-08 22:58:32+00', NULL, NULL, NULL, '2020-02-08 22:58:11+00', 'Visa', 'a', 1, 'a', NULL, false, NULL, 'Delivered', NULL, 1);
INSERT INTO public.sales_sales (sale_id, delivery_price, assembly_price, ex_vat, vat, total, product_id, store_id, transaction_ref, address_line_1, address_line_2, city_id, country_id, delivered_on, delivery_from, delivery_included, delivery_to, ordered_on, payment_method, postcode, quantity, recipient, return_by, returned_allowed, returned_on, status, tracking_ref, user_id) VALUES (3, 0, 0, 0, 0, 0, 11, 1, 'test3', 'sdfdf', 'sdfsdf', 25, 'ARE', '2020-02-08 23:18:20+00', '2020-02-08 23:18:30+00', NULL, '2020-02-08 23:18:31+00', '2020-02-08 23:18:06+00', 'Visa', 'sdfsdf', 1, 'Test 2', NULL, false, NULL, 'Delivered', NULL, 1);


--
-- TOC entry 4463 (class 0 OID 712919)
-- Dependencies: 273
-- Data for Name: stores_deliveries; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4465 (class 0 OID 712924)
-- Dependencies: 275
-- Data for Name: stores_storereviews; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4467 (class 0 OID 712932)
-- Dependencies: 277
-- Data for Name: stores_stores; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (1, 'J Miller', '26-28 Market Square', 'Poplar', 'E14 6BU', '020 7987 3250', 'NaN', 'NaN', NULL, 0, -0.0144060000000000004, 51.5096660000000028, '50', 55, 'Some Stuff', '1994-01-01', '2019-12-24 20:35:32.083607+00', '2019-12-24 20:35:32.083607+00', 'Active', 25, 'GBR');
INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (2, 'Jones and Sons Furnishers', '20 Market Square', 'Poplar', 'E14 6AQ', '020 7987 3233', 'NaN', 'NaN', NULL, 0, -0.0144060000000000004, 51.5096649999999983, '50', 55, 'Some Stuff', '1994-01-02', '2019-12-24 20:35:32.092612+00', '2019-12-24 20:35:32.092612+00', 'Active', 25, 'GBR');
INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (3, 'Medina Carpets & Furniture', '146 Martha St', 'Shadwell', 'E1 2PG', '020 7790 0202', 'NaN', 'https://mcfhome.co.uk/', NULL, 0, -0.0144060000000000004, 51.5096640000000008, '50', 55, 'Some Stuff', '1994-01-03', '2019-12-24 20:35:32.094614+00', '2019-12-24 20:35:32.094614+00', 'Active', 25, 'GBR');
INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (4, 'Apres Furniture Ltd.', '108 Coppergate House', '16 Brune Street', 'E1 7NJ', '020 7721 7914', 'info@apresfurniture.co.uk', 'https://www.apresfurniture.co.uk/', NULL, 0, -0.0144060000000000004, 51.5096630000000033, '50', 55, 'Some Stuff', '1994-01-04', '2019-12-24 20:35:32.096615+00', '2019-12-24 20:35:32.096615+00', 'Active', 25, 'GBR');
INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (5, 'Loaf', 'B & C, 132 Commercial Street', 'Spitalfields', 'E1 6AZ', '020 3141 8300', 'trade@loaf.com', 'https://loaf.com/', NULL, 0, -0.0144060000000000004, 51.5096619999999987, '50', 55, 'Some Stuff', '1994-01-05', '2019-12-24 20:35:32.098617+00', '2019-12-24 20:35:32.098617+00', 'Active', 25, 'GBR');
INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (6, 'StudioModern', '3rd floor', '15 Solebay Street', 'E1 4PN', '07851 253748', 'NaN', 'https://studiomodern.co.uk', NULL, 0, -0.0144060000000000004, 51.5096610000000013, '50', 55, 'Some Stuff', '1994-01-06', '2019-12-24 20:35:32.100618+00', '2019-12-24 20:35:32.100618+00', 'Active', 25, 'GBR');
INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (7, 'Urban Wardrobes', '3 Westport St', 'Stepney Green', 'E1 0RA', '020 8050 3063', 'info@urbanwardrobes.co.uk', 'https://urbanwardrobes.co.uk/', NULL, 0, -0.0144060000000000004, 51.5096599999999967, '50', 55, 'Some Stuff', '1994-01-07', '2019-12-24 20:35:32.102626+00', '2019-12-24 20:35:32.102626+00', 'Active', 25, 'GBR');
INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (8, 'BHC Furniture', '1 St Mark St', 'Whitechapel', 'E1 8DL', '020 7264 1945', 'NaN', 'https://www.bhcfurniture.co.uk', NULL, 0, -0.0144060000000000004, 51.5096589999999992, '50', 55, 'Some Stuff', '1994-01-08', '2019-12-24 20:35:32.105622+00', '2019-12-24 20:35:32.105622+00', 'Active', 25, 'GBR');
INSERT INTO public.stores_stores (store_id, name, address_line_1, address_line_2, postcode, telephone, email, website, rating, ratings, longitude, latitude, max_delivery_distance, std_delivery_price, description, established, join_date, last_activity, status, city_id, country_id) VALUES (9, 'Simply Bespoke Furniture', '108 Tent St', 'NaN', 'E1 5DZ', '07775 872262', 'NaN', 'https://simply-bespoke.co.uk/contact/', NULL, 0, -0.0144060000000000004, 51.5096580000000017, '50', 55, 'Some Stuff', '1994-01-09', '2019-12-24 20:35:32.107622+00', '2019-12-24 20:35:32.107622+00', 'Active', 25, 'GBR');


--
-- TOC entry 4524 (class 0 OID 0)
-- Dependencies: 223
-- Name: accounts_customerdetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.accounts_customerdetails_id_seq', 1, false);


--
-- TOC entry 4525 (class 0 OID 0)
-- Dependencies: 225
-- Name: accounts_storerights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.accounts_storerights_id_seq', 1, false);


--
-- TOC entry 4526 (class 0 OID 0)
-- Dependencies: 227
-- Name: accounts_storeusers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.accounts_storeusers_id_seq', 1, false);


--
-- TOC entry 4527 (class 0 OID 0)
-- Dependencies: 229
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- TOC entry 4528 (class 0 OID 0)
-- Dependencies: 231
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- TOC entry 4529 (class 0 OID 0)
-- Dependencies: 233
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 120, true);


--
-- TOC entry 4530 (class 0 OID 0)
-- Dependencies: 236
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- TOC entry 4531 (class 0 OID 0)
-- Dependencies: 237
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 25, true);


--
-- TOC entry 4532 (class 0 OID 0)
-- Dependencies: 239
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- TOC entry 4533 (class 0 OID 0)
-- Dependencies: 241
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 44, true);


--
-- TOC entry 4534 (class 0 OID 0)
-- Dependencies: 243
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 30, true);


--
-- TOC entry 4535 (class 0 OID 0)
-- Dependencies: 245
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 34, true);


--
-- TOC entry 4536 (class 0 OID 0)
-- Dependencies: 248
-- Name: misc_cities_city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.misc_cities_city_id_seq', 3987, true);


--
-- TOC entry 4537 (class 0 OID 0)
-- Dependencies: 251
-- Name: products_categories_cat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_categories_cat_id_seq', 6, true);


--
-- TOC entry 4538 (class 0 OID 0)
-- Dependencies: 254
-- Name: products_colours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_colours_id_seq', 143, true);


--
-- TOC entry 4539 (class 0 OID 0)
-- Dependencies: 256
-- Name: products_features_feature_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_features_feature_id_seq', 14, true);


--
-- TOC entry 4540 (class 0 OID 0)
-- Dependencies: 258
-- Name: products_linkedproducts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_linkedproducts_id_seq', 18, true);


--
-- TOC entry 4541 (class 0 OID 0)
-- Dependencies: 260
-- Name: products_productfeatures_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_productfeatures_id_seq', 2, true);


--
-- TOC entry 4542 (class 0 OID 0)
-- Dependencies: 262
-- Name: products_productreviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_productreviews_id_seq', 9, true);


--
-- TOC entry 4543 (class 0 OID 0)
-- Dependencies: 264
-- Name: products_products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_products_product_id_seq', 199, true);


--
-- TOC entry 4544 (class 0 OID 0)
-- Dependencies: 268
-- Name: products_subcategories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_subcategories_id_seq', 15, true);


--
-- TOC entry 4545 (class 0 OID 0)
-- Dependencies: 279
-- Name: sales_deliveraddresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sales_deliveraddresses_id_seq', 1, false);


--
-- TOC entry 4546 (class 0 OID 0)
-- Dependencies: 270
-- Name: sales_invoices_invoice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sales_invoices_invoice_id_seq', 1, false);


--
-- TOC entry 4547 (class 0 OID 0)
-- Dependencies: 272
-- Name: sales_sales_sale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sales_sales_sale_id_seq', 3, true);


--
-- TOC entry 4548 (class 0 OID 0)
-- Dependencies: 274
-- Name: stores_deliveries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.stores_deliveries_id_seq', 1, false);


--
-- TOC entry 4549 (class 0 OID 0)
-- Dependencies: 276
-- Name: stores_storereviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.stores_storereviews_id_seq', 1, false);


--
-- TOC entry 4550 (class 0 OID 0)
-- Dependencies: 278
-- Name: stores_stores_store_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.stores_stores_store_id_seq', 9, true);


--
-- TOC entry 4096 (class 2606 OID 712967)
-- Name: accounts_customerdetails accounts_customerdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_customerdetails
    ADD CONSTRAINT accounts_customerdetails_pkey PRIMARY KEY (id);


--
-- TOC entry 4098 (class 2606 OID 712969)
-- Name: accounts_customerdetails accounts_customerdetails_user_id_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_customerdetails
    ADD CONSTRAINT accounts_customerdetails_user_id_id_key UNIQUE (user_id_id);


--
-- TOC entry 4100 (class 2606 OID 712971)
-- Name: accounts_storerights accounts_storerights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_storerights
    ADD CONSTRAINT accounts_storerights_pkey PRIMARY KEY (id);


--
-- TOC entry 4102 (class 2606 OID 712973)
-- Name: accounts_storeusers accounts_storeusers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_storeusers
    ADD CONSTRAINT accounts_storeusers_pkey PRIMARY KEY (id);


--
-- TOC entry 4106 (class 2606 OID 712975)
-- Name: accounts_storeusers accounts_storeusers_user_id_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_storeusers
    ADD CONSTRAINT accounts_storeusers_user_id_id_key UNIQUE (user_id_id);


--
-- TOC entry 4109 (class 2606 OID 712977)
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- TOC entry 4114 (class 2606 OID 712979)
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- TOC entry 4117 (class 2606 OID 712981)
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 4111 (class 2606 OID 712983)
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- TOC entry 4120 (class 2606 OID 712985)
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- TOC entry 4122 (class 2606 OID 712987)
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- TOC entry 4130 (class 2606 OID 712989)
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- TOC entry 4133 (class 2606 OID 712991)
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- TOC entry 4124 (class 2606 OID 712993)
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- TOC entry 4136 (class 2606 OID 712995)
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 4139 (class 2606 OID 712997)
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- TOC entry 4127 (class 2606 OID 712999)
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- TOC entry 4142 (class 2606 OID 713001)
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- TOC entry 4145 (class 2606 OID 713003)
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- TOC entry 4147 (class 2606 OID 713005)
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- TOC entry 4149 (class 2606 OID 713007)
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4152 (class 2606 OID 713009)
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- TOC entry 4157 (class 2606 OID 713011)
-- Name: misc_cities misc_cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.misc_cities
    ADD CONSTRAINT misc_cities_pkey PRIMARY KEY (city_id);


--
-- TOC entry 4161 (class 2606 OID 713013)
-- Name: misc_countries misc_countries_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.misc_countries
    ADD CONSTRAINT misc_countries_name_key UNIQUE (name);


--
-- TOC entry 4163 (class 2606 OID 713015)
-- Name: misc_countries misc_countries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.misc_countries
    ADD CONSTRAINT misc_countries_pkey PRIMARY KEY (country_code);


--
-- TOC entry 4166 (class 2606 OID 713017)
-- Name: products_categories products_categories_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_categories
    ADD CONSTRAINT products_categories_name_key UNIQUE (name);


--
-- TOC entry 4168 (class 2606 OID 713019)
-- Name: products_categories products_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_categories
    ADD CONSTRAINT products_categories_pkey PRIMARY KEY (cat_id);


--
-- TOC entry 4171 (class 2606 OID 713021)
-- Name: products_colourfamilies products_colourfamilies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_colourfamilies
    ADD CONSTRAINT products_colourfamilies_pkey PRIMARY KEY (name);


--
-- TOC entry 4174 (class 2606 OID 713023)
-- Name: products_colours products_colours_hex_val_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_colours
    ADD CONSTRAINT products_colours_hex_val_key UNIQUE (hex_val);


--
-- TOC entry 4177 (class 2606 OID 713025)
-- Name: products_colours products_colours_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_colours
    ADD CONSTRAINT products_colours_name_key UNIQUE (name);


--
-- TOC entry 4179 (class 2606 OID 713027)
-- Name: products_colours products_colours_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_colours
    ADD CONSTRAINT products_colours_pkey PRIMARY KEY (id);


--
-- TOC entry 4182 (class 2606 OID 713029)
-- Name: products_features products_features_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_features
    ADD CONSTRAINT products_features_pkey PRIMARY KEY (feature_id);


--
-- TOC entry 4184 (class 2606 OID 713031)
-- Name: products_linkedproducts products_linkedproducts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_linkedproducts
    ADD CONSTRAINT products_linkedproducts_pkey PRIMARY KEY (id);


--
-- TOC entry 4191 (class 2606 OID 713033)
-- Name: products_productfeatures products_productfeatures_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productfeatures
    ADD CONSTRAINT products_productfeatures_pkey PRIMARY KEY (id);


--
-- TOC entry 4194 (class 2606 OID 713035)
-- Name: products_productreviews products_productreviews_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productreviews
    ADD CONSTRAINT products_productreviews_pkey PRIMARY KEY (id);


--
-- TOC entry 4201 (class 2606 OID 713037)
-- Name: products_products products_products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_products
    ADD CONSTRAINT products_products_pkey PRIMARY KEY (product_id);


--
-- TOC entry 4206 (class 2606 OID 713039)
-- Name: products_relationtype products_relationtype_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_relationtype
    ADD CONSTRAINT products_relationtype_pkey PRIMARY KEY (relation);


--
-- TOC entry 4210 (class 2606 OID 713041)
-- Name: products_rooms products_rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_rooms
    ADD CONSTRAINT products_rooms_pkey PRIMARY KEY (name);


--
-- TOC entry 4213 (class 2606 OID 713043)
-- Name: products_subcategories products_subcategories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_subcategories
    ADD CONSTRAINT products_subcategories_pkey PRIMARY KEY (id);


--
-- TOC entry 4243 (class 2606 OID 827390)
-- Name: sales_deliveraddresses sales_deliveraddresses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_deliveraddresses
    ADD CONSTRAINT sales_deliveraddresses_pkey PRIMARY KEY (id);


--
-- TOC entry 4218 (class 2606 OID 713045)
-- Name: sales_invoices sales_invoices_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_invoices
    ADD CONSTRAINT sales_invoices_pkey PRIMARY KEY (invoice_id);


--
-- TOC entry 4223 (class 2606 OID 713047)
-- Name: sales_sales sales_sales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_sales
    ADD CONSTRAINT sales_sales_pkey PRIMARY KEY (sale_id);


--
-- TOC entry 4228 (class 2606 OID 713049)
-- Name: stores_deliveries stores_deliveries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_deliveries
    ADD CONSTRAINT stores_deliveries_pkey PRIMARY KEY (id);


--
-- TOC entry 4231 (class 2606 OID 713051)
-- Name: stores_storereviews stores_storereviews_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_storereviews
    ADD CONSTRAINT stores_storereviews_pkey PRIMARY KEY (id);


--
-- TOC entry 4238 (class 2606 OID 713053)
-- Name: stores_stores stores_stores_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_stores
    ADD CONSTRAINT stores_stores_pkey PRIMARY KEY (store_id);


--
-- TOC entry 4092 (class 1259 OID 713054)
-- Name: accounts_customerdetails_city_id_8b47abcb; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX accounts_customerdetails_city_id_8b47abcb ON public.accounts_customerdetails USING btree (city_id);


--
-- TOC entry 4093 (class 1259 OID 713055)
-- Name: accounts_customerdetails_country_id_c97329fa; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX accounts_customerdetails_country_id_c97329fa ON public.accounts_customerdetails USING btree (country_id);


--
-- TOC entry 4094 (class 1259 OID 713056)
-- Name: accounts_customerdetails_country_id_c97329fa_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX accounts_customerdetails_country_id_c97329fa_like ON public.accounts_customerdetails USING btree (country_id varchar_pattern_ops);


--
-- TOC entry 4103 (class 1259 OID 713057)
-- Name: accounts_storeusers_rights_id_69756474; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX accounts_storeusers_rights_id_69756474 ON public.accounts_storeusers USING btree (rights_id);


--
-- TOC entry 4104 (class 1259 OID 713058)
-- Name: accounts_storeusers_store_id_id_5f2ec58f; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX accounts_storeusers_store_id_id_5f2ec58f ON public.accounts_storeusers USING btree (store_id_id);


--
-- TOC entry 4107 (class 1259 OID 713059)
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- TOC entry 4112 (class 1259 OID 713060)
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- TOC entry 4115 (class 1259 OID 713061)
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- TOC entry 4118 (class 1259 OID 713062)
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- TOC entry 4128 (class 1259 OID 713063)
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- TOC entry 4131 (class 1259 OID 713064)
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- TOC entry 4134 (class 1259 OID 713065)
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- TOC entry 4137 (class 1259 OID 713066)
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- TOC entry 4125 (class 1259 OID 713067)
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- TOC entry 4140 (class 1259 OID 713068)
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- TOC entry 4143 (class 1259 OID 713069)
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- TOC entry 4150 (class 1259 OID 713070)
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- TOC entry 4153 (class 1259 OID 713071)
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- TOC entry 4154 (class 1259 OID 713072)
-- Name: misc_cities_country_code_id_a0792cf8; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX misc_cities_country_code_id_a0792cf8 ON public.misc_cities USING btree (country_code_id);


--
-- TOC entry 4155 (class 1259 OID 713073)
-- Name: misc_cities_country_code_id_a0792cf8_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX misc_cities_country_code_id_a0792cf8_like ON public.misc_cities USING btree (country_code_id varchar_pattern_ops);


--
-- TOC entry 4158 (class 1259 OID 713074)
-- Name: misc_countries_country_code_8c332dc2_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX misc_countries_country_code_8c332dc2_like ON public.misc_countries USING btree (country_code varchar_pattern_ops);


--
-- TOC entry 4159 (class 1259 OID 713075)
-- Name: misc_countries_name_904161c2_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX misc_countries_name_904161c2_like ON public.misc_countries USING btree (name varchar_pattern_ops);


--
-- TOC entry 4164 (class 1259 OID 713076)
-- Name: products_categories_name_38539df5_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_categories_name_38539df5_like ON public.products_categories USING btree (name varchar_pattern_ops);


--
-- TOC entry 4169 (class 1259 OID 713077)
-- Name: products_colourfamilies_name_8ae87c40_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_colourfamilies_name_8ae87c40_like ON public.products_colourfamilies USING btree (name varchar_pattern_ops);


--
-- TOC entry 4172 (class 1259 OID 713078)
-- Name: products_colours_hex_val_a4dc906d_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_colours_hex_val_a4dc906d_like ON public.products_colours USING btree (hex_val varchar_pattern_ops);


--
-- TOC entry 4175 (class 1259 OID 713079)
-- Name: products_colours_name_9f6aeae5_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_colours_name_9f6aeae5_like ON public.products_colours USING btree (name varchar_pattern_ops);


--
-- TOC entry 4180 (class 1259 OID 713080)
-- Name: products_features_category_id_46f53bfe; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_features_category_id_46f53bfe ON public.products_features USING btree (category_id);


--
-- TOC entry 4185 (class 1259 OID 713081)
-- Name: products_linkedproducts_product_id_db54a1ab; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_linkedproducts_product_id_db54a1ab ON public.products_linkedproducts USING btree (product_id);


--
-- TOC entry 4186 (class 1259 OID 713082)
-- Name: products_linkedproducts_related_product_id_c2dd98d8; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_linkedproducts_related_product_id_c2dd98d8 ON public.products_linkedproducts USING btree (related_product_id);


--
-- TOC entry 4187 (class 1259 OID 713083)
-- Name: products_linkedproducts_relation_id_d6be9f92; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_linkedproducts_relation_id_d6be9f92 ON public.products_linkedproducts USING btree (relation_id);


--
-- TOC entry 4188 (class 1259 OID 713084)
-- Name: products_linkedproducts_relation_id_d6be9f92_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_linkedproducts_relation_id_d6be9f92_like ON public.products_linkedproducts USING btree (relation_id varchar_pattern_ops);


--
-- TOC entry 4189 (class 1259 OID 713085)
-- Name: products_productfeatures_feature_id_a15fc0da; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_productfeatures_feature_id_a15fc0da ON public.products_productfeatures USING btree (feature_id);


--
-- TOC entry 4192 (class 1259 OID 713086)
-- Name: products_productfeatures_product_id_39a407bc; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_productfeatures_product_id_39a407bc ON public.products_productfeatures USING btree (product_id);


--
-- TOC entry 4195 (class 1259 OID 713087)
-- Name: products_productreviews_product_id_9076275c; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_productreviews_product_id_9076275c ON public.products_productreviews USING btree (product_id);


--
-- TOC entry 4196 (class 1259 OID 713088)
-- Name: products_productreviews_store_id_c7cd505a; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_productreviews_store_id_c7cd505a ON public.products_productreviews USING btree (store_id);


--
-- TOC entry 4197 (class 1259 OID 713089)
-- Name: products_productreviews_user_id_912f3128; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_productreviews_user_id_912f3128 ON public.products_productreviews USING btree (user_id);


--
-- TOC entry 4198 (class 1259 OID 713090)
-- Name: products_products_category_id_0cfaa6ce; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_products_category_id_0cfaa6ce ON public.products_products USING btree (category_id);


--
-- TOC entry 4199 (class 1259 OID 713091)
-- Name: products_products_colour_id_8a572a92; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_products_colour_id_8a572a92 ON public.products_products USING btree (colour_id);


--
-- TOC entry 4202 (class 1259 OID 713092)
-- Name: products_products_room_id_a3d6e5e1; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_products_room_id_a3d6e5e1 ON public.products_products USING btree (room_id);


--
-- TOC entry 4203 (class 1259 OID 713093)
-- Name: products_products_room_id_a3d6e5e1_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_products_room_id_a3d6e5e1_like ON public.products_products USING btree (room_id varchar_pattern_ops);


--
-- TOC entry 4204 (class 1259 OID 713094)
-- Name: products_products_store_id_ce310cc7; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_products_store_id_ce310cc7 ON public.products_products USING btree (store_id);


--
-- TOC entry 4207 (class 1259 OID 713095)
-- Name: products_relationtype_relation_95c3e596_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_relationtype_relation_95c3e596_like ON public.products_relationtype USING btree (relation varchar_pattern_ops);


--
-- TOC entry 4208 (class 1259 OID 713096)
-- Name: products_rooms_name_50b70185_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_rooms_name_50b70185_like ON public.products_rooms USING btree (name varchar_pattern_ops);


--
-- TOC entry 4211 (class 1259 OID 713097)
-- Name: products_subcategories_category_id_19ce9aae; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX products_subcategories_category_id_19ce9aae ON public.products_subcategories USING btree (category_id);


--
-- TOC entry 4239 (class 1259 OID 827406)
-- Name: sales_deliveraddresses_city_id_01e07cfa; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_deliveraddresses_city_id_01e07cfa ON public.sales_deliveraddresses USING btree (city_id);


--
-- TOC entry 4240 (class 1259 OID 827407)
-- Name: sales_deliveraddresses_country_id_27ee2f5f; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_deliveraddresses_country_id_27ee2f5f ON public.sales_deliveraddresses USING btree (country_id);


--
-- TOC entry 4241 (class 1259 OID 827408)
-- Name: sales_deliveraddresses_country_id_27ee2f5f_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_deliveraddresses_country_id_27ee2f5f_like ON public.sales_deliveraddresses USING btree (country_id varchar_pattern_ops);


--
-- TOC entry 4244 (class 1259 OID 827409)
-- Name: sales_deliveraddresses_user_id_8c642af8; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_deliveraddresses_user_id_8c642af8 ON public.sales_deliveraddresses USING btree (user_id);


--
-- TOC entry 4214 (class 1259 OID 713098)
-- Name: sales_invoices_city_id_564e1e3a; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_invoices_city_id_564e1e3a ON public.sales_invoices USING btree (city_id);


--
-- TOC entry 4215 (class 1259 OID 713099)
-- Name: sales_invoices_country_id_666c52b8; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_invoices_country_id_666c52b8 ON public.sales_invoices USING btree (country_id);


--
-- TOC entry 4216 (class 1259 OID 713100)
-- Name: sales_invoices_country_id_666c52b8_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_invoices_country_id_666c52b8_like ON public.sales_invoices USING btree (country_id varchar_pattern_ops);


--
-- TOC entry 4219 (class 1259 OID 827359)
-- Name: sales_sales_city_id_f11fbac6; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_sales_city_id_f11fbac6 ON public.sales_sales USING btree (city_id);


--
-- TOC entry 4220 (class 1259 OID 827365)
-- Name: sales_sales_country_id_6ba99298; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_sales_country_id_6ba99298 ON public.sales_sales USING btree (country_id);


--
-- TOC entry 4221 (class 1259 OID 827366)
-- Name: sales_sales_country_id_6ba99298_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_sales_country_id_6ba99298_like ON public.sales_sales USING btree (country_id varchar_pattern_ops);


--
-- TOC entry 4224 (class 1259 OID 713101)
-- Name: sales_sales_product_id_cd9ab4bc; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_sales_product_id_cd9ab4bc ON public.sales_sales USING btree (product_id);


--
-- TOC entry 4225 (class 1259 OID 713102)
-- Name: sales_sales_store_id_89e8596e; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_sales_store_id_89e8596e ON public.sales_sales USING btree (store_id);


--
-- TOC entry 4226 (class 1259 OID 827372)
-- Name: sales_sales_user_id_4542c1a1; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sales_sales_user_id_4542c1a1 ON public.sales_sales USING btree (user_id);


--
-- TOC entry 4229 (class 1259 OID 713103)
-- Name: stores_deliveries_store_id_6b1d1135; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX stores_deliveries_store_id_6b1d1135 ON public.stores_deliveries USING btree (store_id);


--
-- TOC entry 4232 (class 1259 OID 713104)
-- Name: stores_storereviews_store_id_8b4757ce; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX stores_storereviews_store_id_8b4757ce ON public.stores_storereviews USING btree (store_id);


--
-- TOC entry 4233 (class 1259 OID 713105)
-- Name: stores_storereviews_user_id_5203d4a9; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX stores_storereviews_user_id_5203d4a9 ON public.stores_storereviews USING btree (user_id);


--
-- TOC entry 4234 (class 1259 OID 713106)
-- Name: stores_stores_city_id_5fe3c53e; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX stores_stores_city_id_5fe3c53e ON public.stores_stores USING btree (city_id);


--
-- TOC entry 4235 (class 1259 OID 713107)
-- Name: stores_stores_country_id_578300d8; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX stores_stores_country_id_578300d8 ON public.stores_stores USING btree (country_id);


--
-- TOC entry 4236 (class 1259 OID 713108)
-- Name: stores_stores_country_id_578300d8_like; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX stores_stores_country_id_578300d8_like ON public.stores_stores USING btree (country_id varchar_pattern_ops);


--
-- TOC entry 4245 (class 2606 OID 713109)
-- Name: accounts_customerdetails accounts_customerdet_city_id_8b47abcb_fk_misc_citi; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_customerdetails
    ADD CONSTRAINT accounts_customerdet_city_id_8b47abcb_fk_misc_citi FOREIGN KEY (city_id) REFERENCES public.misc_cities(city_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4246 (class 2606 OID 713114)
-- Name: accounts_customerdetails accounts_customerdet_country_id_c97329fa_fk_misc_coun; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_customerdetails
    ADD CONSTRAINT accounts_customerdet_country_id_c97329fa_fk_misc_coun FOREIGN KEY (country_id) REFERENCES public.misc_countries(country_code) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4247 (class 2606 OID 713119)
-- Name: accounts_customerdetails accounts_customerdetails_user_id_id_f06cd283_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_customerdetails
    ADD CONSTRAINT accounts_customerdetails_user_id_id_f06cd283_fk_auth_user_id FOREIGN KEY (user_id_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4248 (class 2606 OID 713124)
-- Name: accounts_storeusers accounts_storeusers_rights_id_69756474_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_storeusers
    ADD CONSTRAINT accounts_storeusers_rights_id_69756474_fk_accounts_ FOREIGN KEY (rights_id) REFERENCES public.accounts_storerights(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4249 (class 2606 OID 713129)
-- Name: accounts_storeusers accounts_storeusers_store_id_id_5f2ec58f_fk_stores_st; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_storeusers
    ADD CONSTRAINT accounts_storeusers_store_id_id_5f2ec58f_fk_stores_st FOREIGN KEY (store_id_id) REFERENCES public.stores_stores(store_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4250 (class 2606 OID 713134)
-- Name: accounts_storeusers accounts_storeusers_user_id_id_14f2838c_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accounts_storeusers
    ADD CONSTRAINT accounts_storeusers_user_id_id_14f2838c_fk_auth_user_id FOREIGN KEY (user_id_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4251 (class 2606 OID 713139)
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4252 (class 2606 OID 713144)
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4253 (class 2606 OID 713149)
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4254 (class 2606 OID 713154)
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4255 (class 2606 OID 713159)
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4256 (class 2606 OID 713164)
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4257 (class 2606 OID 713169)
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4258 (class 2606 OID 713174)
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4259 (class 2606 OID 713179)
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4260 (class 2606 OID 713184)
-- Name: misc_cities misc_cities_country_code_id_a0792cf8_fk_misc_coun; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.misc_cities
    ADD CONSTRAINT misc_cities_country_code_id_a0792cf8_fk_misc_coun FOREIGN KEY (country_code_id) REFERENCES public.misc_countries(country_code) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4261 (class 2606 OID 713189)
-- Name: products_features products_features_category_id_46f53bfe_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_features
    ADD CONSTRAINT products_features_category_id_46f53bfe_fk_products_ FOREIGN KEY (category_id) REFERENCES public.products_categories(cat_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4262 (class 2606 OID 713194)
-- Name: products_linkedproducts products_linkedprodu_product_id_db54a1ab_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_linkedproducts
    ADD CONSTRAINT products_linkedprodu_product_id_db54a1ab_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_products(product_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4263 (class 2606 OID 713199)
-- Name: products_linkedproducts products_linkedprodu_related_product_id_c2dd98d8_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_linkedproducts
    ADD CONSTRAINT products_linkedprodu_related_product_id_c2dd98d8_fk_products_ FOREIGN KEY (related_product_id) REFERENCES public.products_products(product_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4264 (class 2606 OID 713204)
-- Name: products_linkedproducts products_linkedprodu_relation_id_d6be9f92_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_linkedproducts
    ADD CONSTRAINT products_linkedprodu_relation_id_d6be9f92_fk_products_ FOREIGN KEY (relation_id) REFERENCES public.products_relationtype(relation) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4265 (class 2606 OID 713209)
-- Name: products_productfeatures products_productfeat_feature_id_a15fc0da_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productfeatures
    ADD CONSTRAINT products_productfeat_feature_id_a15fc0da_fk_products_ FOREIGN KEY (feature_id) REFERENCES public.products_features(feature_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4266 (class 2606 OID 713214)
-- Name: products_productfeatures products_productfeat_product_id_39a407bc_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productfeatures
    ADD CONSTRAINT products_productfeat_product_id_39a407bc_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_products(product_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4267 (class 2606 OID 713219)
-- Name: products_productreviews products_productrevi_product_id_9076275c_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productreviews
    ADD CONSTRAINT products_productrevi_product_id_9076275c_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_products(product_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4268 (class 2606 OID 713224)
-- Name: products_productreviews products_productrevi_store_id_c7cd505a_fk_stores_st; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productreviews
    ADD CONSTRAINT products_productrevi_store_id_c7cd505a_fk_stores_st FOREIGN KEY (store_id) REFERENCES public.stores_stores(store_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4269 (class 2606 OID 713229)
-- Name: products_productreviews products_productreviews_user_id_912f3128_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_productreviews
    ADD CONSTRAINT products_productreviews_user_id_912f3128_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4270 (class 2606 OID 713234)
-- Name: products_products products_products_category_id_0cfaa6ce_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_products
    ADD CONSTRAINT products_products_category_id_0cfaa6ce_fk_products_ FOREIGN KEY (category_id) REFERENCES public.products_categories(cat_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4271 (class 2606 OID 713239)
-- Name: products_products products_products_colour_id_8a572a92_fk_products_colours_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_products
    ADD CONSTRAINT products_products_colour_id_8a572a92_fk_products_colours_id FOREIGN KEY (colour_id) REFERENCES public.products_colours(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4272 (class 2606 OID 713244)
-- Name: products_products products_products_room_id_a3d6e5e1_fk_products_rooms_name; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_products
    ADD CONSTRAINT products_products_room_id_a3d6e5e1_fk_products_rooms_name FOREIGN KEY (room_id) REFERENCES public.products_rooms(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4273 (class 2606 OID 713249)
-- Name: products_products products_products_store_id_ce310cc7_fk_stores_stores_store_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_products
    ADD CONSTRAINT products_products_store_id_ce310cc7_fk_stores_stores_store_id FOREIGN KEY (store_id) REFERENCES public.stores_stores(store_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4274 (class 2606 OID 713254)
-- Name: products_subcategories products_subcategori_category_id_19ce9aae_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products_subcategories
    ADD CONSTRAINT products_subcategori_category_id_19ce9aae_fk_products_ FOREIGN KEY (category_id) REFERENCES public.products_categories(cat_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4288 (class 2606 OID 827396)
-- Name: sales_deliveraddresses sales_deliveraddress_country_id_27ee2f5f_fk_misc_coun; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_deliveraddresses
    ADD CONSTRAINT sales_deliveraddress_country_id_27ee2f5f_fk_misc_coun FOREIGN KEY (country_id) REFERENCES public.misc_countries(country_code) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4287 (class 2606 OID 827391)
-- Name: sales_deliveraddresses sales_deliveraddresses_city_id_01e07cfa_fk_misc_cities_city_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_deliveraddresses
    ADD CONSTRAINT sales_deliveraddresses_city_id_01e07cfa_fk_misc_cities_city_id FOREIGN KEY (city_id) REFERENCES public.misc_cities(city_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4289 (class 2606 OID 827401)
-- Name: sales_deliveraddresses sales_deliveraddresses_user_id_8c642af8_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_deliveraddresses
    ADD CONSTRAINT sales_deliveraddresses_user_id_8c642af8_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4275 (class 2606 OID 713259)
-- Name: sales_invoices sales_invoices_city_id_564e1e3a_fk_misc_cities_city_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_invoices
    ADD CONSTRAINT sales_invoices_city_id_564e1e3a_fk_misc_cities_city_id FOREIGN KEY (city_id) REFERENCES public.misc_cities(city_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4276 (class 2606 OID 713264)
-- Name: sales_invoices sales_invoices_country_id_666c52b8_fk_misc_coun; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_invoices
    ADD CONSTRAINT sales_invoices_country_id_666c52b8_fk_misc_coun FOREIGN KEY (country_id) REFERENCES public.misc_countries(country_code) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4279 (class 2606 OID 827360)
-- Name: sales_sales sales_sales_city_id_f11fbac6_fk_misc_cities_city_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_sales
    ADD CONSTRAINT sales_sales_city_id_f11fbac6_fk_misc_cities_city_id FOREIGN KEY (city_id) REFERENCES public.misc_cities(city_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4280 (class 2606 OID 827367)
-- Name: sales_sales sales_sales_country_id_6ba99298_fk_misc_countries_country_code; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_sales
    ADD CONSTRAINT sales_sales_country_id_6ba99298_fk_misc_countries_country_code FOREIGN KEY (country_id) REFERENCES public.misc_countries(country_code) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4277 (class 2606 OID 713269)
-- Name: sales_sales sales_sales_product_id_cd9ab4bc_fk_products_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_sales
    ADD CONSTRAINT sales_sales_product_id_cd9ab4bc_fk_products_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_products(product_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4278 (class 2606 OID 713274)
-- Name: sales_sales sales_sales_store_id_89e8596e_fk_stores_stores_store_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_sales
    ADD CONSTRAINT sales_sales_store_id_89e8596e_fk_stores_stores_store_id FOREIGN KEY (store_id) REFERENCES public.stores_stores(store_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4281 (class 2606 OID 827378)
-- Name: sales_sales sales_sales_user_id_4542c1a1_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sales_sales
    ADD CONSTRAINT sales_sales_user_id_4542c1a1_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4282 (class 2606 OID 713279)
-- Name: stores_deliveries stores_deliveries_store_id_6b1d1135_fk_stores_stores_store_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_deliveries
    ADD CONSTRAINT stores_deliveries_store_id_6b1d1135_fk_stores_stores_store_id FOREIGN KEY (store_id) REFERENCES public.stores_stores(store_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4283 (class 2606 OID 713284)
-- Name: stores_storereviews stores_storereviews_store_id_8b4757ce_fk_stores_stores_store_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_storereviews
    ADD CONSTRAINT stores_storereviews_store_id_8b4757ce_fk_stores_stores_store_id FOREIGN KEY (store_id) REFERENCES public.stores_stores(store_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4284 (class 2606 OID 713289)
-- Name: stores_storereviews stores_storereviews_user_id_5203d4a9_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_storereviews
    ADD CONSTRAINT stores_storereviews_user_id_5203d4a9_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4285 (class 2606 OID 713294)
-- Name: stores_stores stores_stores_city_id_5fe3c53e_fk_misc_cities_city_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_stores
    ADD CONSTRAINT stores_stores_city_id_5fe3c53e_fk_misc_cities_city_id FOREIGN KEY (city_id) REFERENCES public.misc_cities(city_id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 4286 (class 2606 OID 713299)
-- Name: stores_stores stores_stores_country_id_578300d8_fk_misc_coun; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stores_stores
    ADD CONSTRAINT stores_stores_country_id_578300d8_fk_misc_coun FOREIGN KEY (country_id) REFERENCES public.misc_countries(country_code) DEFERRABLE INITIALLY DEFERRED;


-- Completed on 2021-05-30 20:23:18

--
-- PostgreSQL database dump complete
--

