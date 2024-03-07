import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { useTranslation } from 'next-i18next';


const StyledCell = styled.div`
 
&.inreview {
    color:white;
}
&.confirmed {
    color:white;
  }
`;

function getCssClass(value) {
    if (value === 'Confirmed') return "confirmed";
    else if (value === 'In review') return "inreview";
    return "low";
}
const DTable = ({ purchases }) => {
    const [countries, SetCountries] = useState([]);
    const { t: translate } = useTranslation(['common']);
    const getCountries = async () => {
        try {

            SetCountries(purchases.data);


        } catch (error) {
            console.log(error);
        }
    }
    const columns = [
        {
            name: translate('item'),
            selector: row => row.attributes.item,
            sortable: true,

        },
        {
            name: translate('status'),
            selector: row => row.attributes.status,
            sortable: true,
            cell: (row) => (
                <StyledCell className={getCssClass(row.attributes.status)}>
                    {row.attributes.status}
                </StyledCell>
            )

        },
        {
            name: translate('total'),
            sortable: true,
            selector: row => row.attributes.total
        },
        {
            name: translate('details'),
            sortable: true,
            selector: row => row.attributes.details
        },
        {
            name:translate('date'),
            sortable: true,
            selector: row => row.attributes.purchase_date
        },
    ]

    useEffect(() => {
        getCountries();
    }, [])

    return (
        <div className="w-100">
            <DataTable columns={columns} data={countries} pagination fixedHeader />
        </div>
    )
}
export default DTable