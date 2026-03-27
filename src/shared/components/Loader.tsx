import { TailSpin } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className="w-full h-fit py-6 flex justify-center items-center">
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                visible={true}
            />
        </div>
    )
}