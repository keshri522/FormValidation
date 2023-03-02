import {render,screen} from "@testing-library/react"

import Form from "./froms"
test("should render welcome  link",()=>{
    render(<Form/>);
    const Link_Element=screen.getByText(/welcome/i);
    expect(Link_Element);
});

