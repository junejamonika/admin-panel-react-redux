import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {
  TrashIcon,
  PencilSquareIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getAccounts, deleteAccount } from "@/store/Account/actions";
import Modal from "@/components/modal";

const headers = [
  {
    label: "First Name",
    field: "firstName",
    sort: "asc",
    width: 150,
  },
  {
    label: "Last Name",
    field: "lastName",
    sort: "asc",
    width: 270,
  },
  {
    label: "Paid Plan",
    field: "paidPlan",
    sort: "asc",
    width: 200,
  },
  {
    label: "Custom Plan",
    field: "customPlan",
    sort: "asc",
    width: 200,
  },
  {
    label: "Plan Name",
    field: "planName",
    sort: "asc",
    width: 200,
  },
  {
    label: "Actions",
    field: "actions",
    sort: "asc",
    width: 100,
  }
]

function AccountList({ accountList, dispatch }) {
  const [showDeleteModal, setShowdeleteModal] = useState(false);
  const [modalDeleteToggle, setModalDeleteToggle] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getAccounts());
  }, []);

  const handleDeleteModal = (id) => {
    setDeleteId(id);
    setShowdeleteModal(!showDeleteModal);
  }

  const handleDelete = (is_confirm) => {
    setShowdeleteModal(!showDeleteModal);
    if (is_confirm) {
      dispatch(deleteAccount(deleteId));
    }
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Account List
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {headers.map((obj) => (
                  <th
                    key={obj.field}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {obj.label}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {accountList && accountList.map(
                ({ uuid, firstName, lastName, email, paidPlan, customPlan, planName }, key) => {
                  const className = `py-3 px-5 ${key === accountList.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={firstName + key}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          {/* <Avatar src={img} alt={firstName} size="sm" /> */}
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {firstName}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {lastName}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {paidPlan}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {customPlan}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {planName}
                        </Typography>
                      </td>
                      <td className={className}>
                      <div className="flex items-center gap-4">
                        <div role="button" onClick={() => handleDeleteModal(uuid)} id="deleteIcon"><TrashIcon strokeWidth={3} className="h-4 w-4 text-red-500" /></div> {" "}
                        <Link className='text-black' to={`/dashboard/edit-account/${uuid}`}><span role="button" id="pencilIcon"><PencilSquareIcon strokeWidth={3} className="h-4 w-4 text-blue-500" /></span></Link>{" "}
                        {/* <i role="button" onClick={() => onSelectPlanHander(uuid)} className='ti-calendar text-black' id="planIcon"></i>
                        <i role="button" onClick={() => onPromotUserHander(row)} className='ti-loop text-black'></i> */}
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Modal open={showDeleteModal} modalHeading="Delete Account" modalBody="Are you sure you want to delete this account?" handleModal={handleDelete} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    accountList: state.account.accounts
  }
}

export default connect(mapStateToProps)(AccountList)

