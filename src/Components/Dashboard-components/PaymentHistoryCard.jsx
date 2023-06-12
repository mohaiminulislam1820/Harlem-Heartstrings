

const PaymentHistoryCard = ({paymentDetails}) => {
    const{amount,metadata,created}=paymentDetails;

    return (
        <div className="border shadown-md p-4 rounded-lg flex flex-col gap-4">
            <p><span className="font-semibold">Class Name :</span> ${metadata.name}</p>

            <p><span className="font-semibold">Instructor Name :</span> ${metadata.instructorName}</p>

            <p><span className="font-semibold">Price :</span> ${amount/100}</p>

            <p><span className="font-semibold">Purchased Date :</span> {(new Date(created*1000)).toLocaleString()}</p>
            
        </div>
    );
};

export default PaymentHistoryCard;