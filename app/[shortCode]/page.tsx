import prisma from "@/lib/db";
import { redirect } from "next/navigation";

// No need for custom interface—define inline
export default async function RedirectPage({
    params,
}: {
    params: { shortCode: string }; // Directly inline the expected structure
}) {
    const { shortCode } = params; // No await needed

    // Fetch the URL based on shortCode
    const url = await prisma.url.findUnique({
        where: {
            shortCode: shortCode,
        },
    });

    // Handle 404 case
    if (!url || !url.originalUrl) {
        return <div>404 not found</div>;
    }

    // Increment visit count
    await prisma.url.update({
        data: {
            visits: { increment: 1 },
        },
        where: {
            id: url.id,
        },
    });

    // Redirect to the original URL
    redirect(url.originalUrl); // Safe redirect
}
