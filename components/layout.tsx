import { Component, ReactNode } from "react";
import React from "react";
import Head from "next/head";

type Props = {};

const siteTitle = "terappy's portfolio";

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`this site is ${siteTitle}.`} />
        <meta
          property="og:image"
          content={`https://terappy.github.io/og_image.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {children}
    </div>
  );
};
