import {ImageResponse} from "next/og";

export const alt = "MoLineTy · Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    backgroundColor: "#0f0f0f",
                    backgroundImage:
                        "radial-gradient(circle at 85% 15%, rgba(249,115,22,0.18) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgba(249,115,22,0.08) 0%, transparent 40%)",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "32px",
                    }}
                >
                    <div
                        style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            backgroundColor: "#22c55e",
                        }}
                    />
                    <span
                        style={{
                            color: "#f97316",
                            fontSize: "26px",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                        }}
                    >
                        Fullstack Developer
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: "120px",
                        fontWeight: 800,
                        color: "#f0f0f0",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                    }}
                >
                    MoLineTy
                </div>

                <div
                    style={{
                        display: "flex",
                        color: "#9a9a9a",
                        fontSize: "34px",
                        marginTop: "24px",
                        maxWidth: "780px",
                    }}
                >
                    Backend on Python &amp; Go. Frontend on React / Next.js.
                    Shipping since 2022.
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "14px",
                        marginTop: "48px",
                    }}
                >
                    {["Python", "Go", "TypeScript", "React", "Next.js", "PostgreSQL"].map(
                        (tag) => (
                            <div
                                key={tag}
                                style={{
                                    display: "flex",
                                    padding: "10px 22px",
                                    borderRadius: "10px",
                                    border: "1px solid #2a2a2a",
                                    backgroundColor: "#1a1a1a",
                                    color: "#f0f0f0",
                                    fontSize: "24px",
                                }}
                            >
                                {tag}
                            </div>
                        )
                    )}
                </div>
            </div>
        ),
        { ...size }
    );
}