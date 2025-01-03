import { ReactNode } from "react";

type TPageIntroProps = {
    className: string,
    children: ReactNode
}

const PageIntro = ({ className, children }: TPageIntroProps) => {
    return (
        <div className={`page-intro ${className}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        { children}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PageIntro;