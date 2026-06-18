import { useFormStatus } from "react-dom";


export default function Submit() {
    // useFormStatus can give us information about the form state
    // like pending, data, method, action, etc. all in the documents
    
    // It MUST be used inside a component
    // that is rendered INSIDE a <form>
    const { pending} = useFormStatus();
    return(
        <p className="actions">
            <button type="submit" disabled={pending}>
                {pending ?  "Submiting..." : "Submit" }
            </button>
        </p>
    );
}