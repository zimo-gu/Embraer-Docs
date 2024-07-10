/* eslint-env node */
import * as React from "react";
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

const font = fetch("https://docs.rankgun.works/fonts/AftikaBold.ttf").then(res =>
    res.arrayBuffer(),
);

export default async function OG(req: NextRequest) {
    const aftika = await font;

    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
        ? searchParams.get("title")?.slice(0, 100)
        : "Embraer Roblox Documentation";

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: 80,
                    backgroundColor: "#030303",
                    backgroundImage:
                        "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
                    backgroundSize: "100px 100px",
                    backgroundPosition: "-30px -10px",
                    fontWeight: 600,
                    color: "white",
                }}
            >

                <img src="/public/images/embraerlogo.png" alt="ER Logo" width="60" height="60"></img>
                <span style={{
                            fontSize: '45px',
                            letterSpacing: '-.01em',
                            position: "absolute",
                            top: "81px",
                            left: 155
                        }}>Embraer Roblox</span>
                
                
                <p
                    style={{
                        position: "absolute",
                        bottom: 70,
                        left: 80,
                        margin: 0,
                        fontSize: 30,
                        letterSpacing: -1,
                    }}
                >
                    Flying Refined.
                </p>
                <h1
                    style={{
                        fontSize: 82,
                        margin: "0 0 0 -2px",
                        lineHeight: 1.1,
                        textShadow: "0 2px 30px #000",
                        letterSpacing: -2,

                        // backgroundImage: "linear-gradient(90deg, #fff 40%, #aaa)",
                        // backgroundClip: "text",

                        // WebkitBackgroundClip: "text",
                        // color: "transparent",
                        color: "white",
                    }}
                >
                    {title}
                </h1>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "AftikaBold",
                    data: aftika,
                    style: "normal",
                },
            ],
        },
    );
}
