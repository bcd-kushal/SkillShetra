import { ChildrenType, ClassNameType } from "@/common/types/reactTypes";

export const HorizontalSpacing = ({ children, className }: { children: ChildrenType, className?: ClassNameType }) => (
    <div className={`px-3 sm:px-6 md:px- ${className || ""}`}>
        {children}
    </div>
)
