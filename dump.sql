--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdBy" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'https://www.youtube.com/', 'iYYTWN-iAm', 0, 1, '2022-12-21 16:00:30.861757');
INSERT INTO public.urls VALUES (2, 'https://www.tamar.org.br/', 'f9l_-dsGmq', 4, 2, '2022-12-21 16:02:18.778567');
INSERT INTO public.urls VALUES (3, 'https://www.youtube.com/@thicode.channel', 'JOM3S_qwiI', 2, 4, '2022-12-21 16:03:33.592329');
INSERT INTO public.urls VALUES (4, 'http://baleiafranca.org.br/', 'psbWjuTmdA', 2, 2, '2022-12-21 16:04:34.318866');
INSERT INTO public.urls VALUES (5, 'https://www.twitch.tv/pomeirania', 'mGmtumLwld', 1, 6, '2022-12-21 16:05:21.916951');
INSERT INTO public.urls VALUES (6, 'https://www.driven.com.br/', 'p34YCMqr1b', 0, 8, '2022-12-21 16:06:14.259494');
INSERT INTO public.urls VALUES (7, 'https://www.respondeai.com.br/', 'wbAKLju6oq', 0, 8, '2022-12-21 16:06:36.314846');
INSERT INTO public.urls VALUES (8, 'https://www.interviewbit.com/blog/difference-between-frontend-and-backend/#:~:text=Users%20can%20see%20and%20interact,the%20functionality%20of%20the%20application', 'OsimFPgsTf', 0, 3, '2022-12-21 16:07:22.032203');
INSERT INTO public.urls VALUES (9, 'https://www.makeuseof.com/reasons-why-run-linux-in-virtual-machines/#:~:text=Fast%20Startup,Linux%20machine%20without%20wasting%20time', 'wz9dHD7ce5', 1, 7, '2022-12-21 16:08:23.580961');
INSERT INTO public.urls VALUES (10, 'https://bootcampra.notion.site/Jo-o-Vitor-Ribeiro-Pereira-b21eabc5deff44268fa0490cc3f05838', '79zGa_0R2I', 6, 3, '2022-12-21 16:09:06.154474');
INSERT INTO public.urls VALUES (11, 'https://us05web.zoom.us/j/4186716165?pwd=bFl0eTBCSUpoMmNYeU9XWEFsYnpldz09', 'EuYcopLdHi', 3, 3, '2022-12-21 16:09:41.4165');
INSERT INTO public.urls VALUES (12, 'https://www.youtube.com/@TED', 'PmBj_gQyZu', 0, 10, '2022-12-21 16:14:21.490207');
INSERT INTO public.urls VALUES (13, 'https://www.driven.com.br/', 'Y_SUcYZ5Cs', 0, 11, '2022-12-21 16:15:08.127991');
INSERT INTO public.urls VALUES (14, 'https://www.quora.com/Why-is-backend-more-important-than-frontend', 'ojkiTBeKNu', 0, 3, '2022-12-21 16:15:52.062042');
INSERT INTO public.urls VALUES (15, 'https://hub.driven.com.br/computacao', 'bWTeSP8grt', 0, 11, '2022-12-21 16:16:24.01263');
INSERT INTO public.urls VALUES (16, 'https://www.instagram.com/', 'U6ltjqGlz2', 0, 2, '2022-12-21 16:16:45.411589');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@gmail.com', '$2b$10$k6SWm36.7QW1lAA/uzaKJu27dSE.tuSXmGhHQY6ItlyjUqDfCZKc2', '2022-12-21 15:48:35.604066');
INSERT INTO public.users VALUES (2, 'Laura', 'laura@gmail.com', '$2b$10$ucEl3XEAegOW9TMGXbqK6.BzGu58otDwgSdU/ajdkL5jisFX3SZXe', '2022-12-21 15:49:52.817665');
INSERT INTO public.users VALUES (3, 'Iago', 'iago@gmail.com', '$2b$10$1bt9AqpoJMJqZdQJJagc7OKp6i3SjkAsRIo97WAaMxdlA.ku652di', '2022-12-21 15:50:16.936911');
INSERT INTO public.users VALUES (4, 'thicode', 'thicode@gmail.com', '$2b$10$Zdtd6nN9eB3U03W35QXGxOtMY9FC.gAr0yodcYFKQVIVVu7vRPo0q', '2022-12-21 15:50:46.655839');
INSERT INTO public.users VALUES (5, 'Mr. Pix', 'thiagorosa@gmail.com', '$2b$10$1h9sTvPUw2cPUb3qj7.ibewp2kruSyXpAHmicEctEI8eVgE0AoJzS', '2022-12-21 15:51:03.543391');
INSERT INTO public.users VALUES (6, 'Let', 'leticia@gmail.com', '$2b$10$ZY50e6F79ct83DXCoA4Tbukvp2F1iBV8iOU2qZjecaBGm8/5g0Gva', '2022-12-21 15:51:38.094322');
INSERT INTO public.users VALUES (7, 'Edu', 'edu@gmail.com', '$2b$10$kzhHDTavZzzahzeQD3/taO2HdAl7zOLxwiNTHDvpohx7y9qiiHZqK', '2022-12-21 15:52:03.693512');
INSERT INTO public.users VALUES (8, 'Michel', 'michel@gmail.com', '$2b$10$tbedfC4Ug6EUiFPPZO.sFO8wkCoV8ZlxCJ5M53r3CFTD19tD2kNgy', '2022-12-21 15:52:28.740687');
INSERT INTO public.users VALUES (9, 'Ronaldinho', 'ronaldinho@gmail.com', '$2b$10$Q0Ditu7MFZB03Y77A2yJmO4mfwRaYQ7dmdr/5VuIJ/jCLrvo0K6De', '2022-12-21 15:52:55.131877');
INSERT INTO public.users VALUES (10, 'Mah', 'marina@gmail.com', '$2b$10$Yd.xNL/CJaoBk3D9P8KZAuoNyrzPZjLKbXGsMX8uDPQXdiHXtASg.', '2022-12-21 15:53:18.587156');
INSERT INTO public.users VALUES (11, 'Pedro', 'pedro@gmail.com', '$2b$10$n1H1asjksZXHXGR0ppT.R.dLMaYbuJf8NQ.t4XxmPCURBGim/F82C', '2022-12-21 15:53:41.450338');
INSERT INTO public.users VALUES (12, 'Vagner', 'vagner@gmail.com', '$2b$10$yZjU7dNGEfx9P0ozjllkIOJ5dFLXkOVfyTQ629CWHUxy13VYN1LxC', '2022-12-21 15:54:06.913597');
INSERT INTO public.users VALUES (13, 'Arthur', 'arthur@gmail.com', '$2b$10$H/Z3Etj1eQvjrpTB3JRiSOc75hVl3eL2OYnwNZ31fRZg/Eale70R.', '2022-12-21 15:54:47.296413');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 16, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 13, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_createdBy_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

