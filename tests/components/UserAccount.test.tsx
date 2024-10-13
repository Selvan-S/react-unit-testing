import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
describe("UserAccount", () => {
  it("should render username", () => {
    render(<UserAccount user={{ id: 1, name: "Cody", isAdmin: true }} />);

    const username = screen.getByText(/cody/i);

    expect(username).toBeInTheDocument();
  });

  it("should render Edit button when if isAdmin is true", () => {
    render(<UserAccount user={{ id: 1, name: "Cody", isAdmin: true }} />);

    const editbutton = screen.getByRole("button");

    expect(editbutton).toBeInTheDocument();
    expect(editbutton).toHaveTextContent(/edit/i);
  });
  it("should render Edit button when if isAdmin is false", () => {
    render(<UserAccount user={{ id: 1, name: "Cody", isAdmin: false }} />);

    const editbutton = screen.queryByRole("button");

    expect(editbutton).not.toBeInTheDocument();
  });
});
