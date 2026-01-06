import Maintenance from "@/components/maintenance/Maintenance"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '임시 점검 중',
}

export default function Page() {
    return <Maintenance />
}

