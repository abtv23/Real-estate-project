import useForm from "../hooks/useForm"
import { useContext } from "react"
import AuthContext from "../contexts/authContext"

const CreateOfferFormKeys = {
    Type: 'type',
    Location: 'location',
    District: 'district',
    Rooms: 'rooms',
    Floor: 'floor',
    Price: 'price',
    Currency: 'currency',
    Area: 'area',
    YearOfBuilding: 'yearOfBuilding',
    Description: 'description',
}

export default function CreateOffer() {
    const {addNewOfferHandler} = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(addNewOfferHandler, {
        [CreateOfferFormKeys.Type]: '',
        [CreateOfferFormKeys.Location]: '',
        [CreateOfferFormKeys.District]: '',
        [CreateOfferFormKeys.Rooms]: '',
        [CreateOfferFormKeys.Floor]: '',
        [CreateOfferFormKeys.Price]: '',
        [CreateOfferFormKeys.Currency]: '',
        [CreateOfferFormKeys.Area]: '',
        [CreateOfferFormKeys.YearOfBuilding]: '',
        [CreateOfferFormKeys.Description]: '',
    })


    return (
        <>
            <h1>NewOffer</h1>
            <div className="add-new-offer-wrapper">

                <form className="add-new-offer-form" onSubmit={onSubmit} action="">
                    <div>
                        <label htmlFor="type">Тип на имота:</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Type]}
                        />
                    </div>

                    <div>
                        <label htmlFor="location">Град:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Location]}
                        />
                    </div>


                    <div>
                        <label htmlFor="district">Квартал:</label>
                        <input
                            type="text"
                            id="district"
                            name="district"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.District]}
                        />
                    </div>

                    <div>
                        <label htmlFor="rooms" >Стаи:</label>
                        <input
                            type="number"
                            id="rooms"
                            name="rooms"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Rooms]}
                        />
                    </div>


                    <div>
                        <label htmlFor="floor">Етаж:</label>
                        <input
                            type="number"
                            id="floor"
                            name="floor"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Floor]}
                        />
                    </div>


                    <div>
                        <label htmlFor="price">Цена:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Price]}
                        />
                    </div>


                    <div>
                        <label htmlFor="currency">Валута:</label>
                        <input
                            type="text"
                            id="currency"
                            name="currency"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Currency]}
                        />
                    </div>


                    <div>
                        <label htmlFor="area">Площ:</label>
                        <input
                            type="number"
                            id="area"
                            name="area"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Area]}
                        />
                    </div>


                    <div>
                        <label htmlFor="yearOfBuilding">Година на строителство:</label>
                        <input
                            type="number"
                            id="yearOfBuilding"
                            name="yearOfBuilding"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.YearOfBuilding]}
                        />
                    </div>


                    <div>  <label htmlFor="description">Описание:</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Description]}
                        />
                    </div>

                    <input
                        type="submit" value="Submit" />
                </form>

                {/* "property
                Type": "Апартамент",
        "location": "София",
        "district": "Манастирски ливади" ,
        "rooms": 2,
        "floor": 4,
        "price": 200000,
        "currency": "EUR",
        "area": 70,
        "yearOfBuilding": 2008,
        "description": "Двустаен апартамент със страхотна локация, южно изложение и паркомясто. Продава се с обзавеждането, което се вижда на снимките, като има въжможност и да се махне.",
        "id": "c64db398-91cd-487c-b900-86058c0422f8" */}
            </div>
        </>
    )
}