import LogoutButton from "@/components/shared/LogoutButton";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const AdminProfile = async () => {
  return (
    <div>
      <h3 className="text-center">Admin Dashboard</h3>

      <div className="flex justify-end flex-wrap mb-4">
        <LogoutButton/>
      </div>

      <ul className="flex flex-col gap-6 ">
        <li>
          <Link className="admin-link group" href="/adminProfile/hero">
            Hero <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/technologies">
            Technologies <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/statistics">
            Statistics <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link
            className="admin-link group"
            href="/adminProfile/trusted-companies"
          >
            Trusted by Companies{" "}
            <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/services">
            Services
            <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/experience">
            Experience
            <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/education">
            Education
            <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link
            className="admin-link group"
            href="/adminProfile/git-journaling"
          >
            Git Journaling <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/projects">
            Projects
            <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/my-skills">
            My Skills
            <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/blogs">
            Blogs
            <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
        <li>
          <Link className="admin-link group" href="/adminProfile/contacts">
            Contacts
            <RiArrowRightLine className="admin-link-icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminProfile;
