import Modal from 'react-modal';
import { Field, Form, Formik } from "formik";
import { SearchInput } from 'components/core-ui/search-input';
import Image from 'next/image';

interface DeliveryAddressModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
  }

export function DeliveryAddressModal({
    isOpen,
    onRequestClose,
}: DeliveryAddressModalProps ) {

    function handleSubmit() {

    }

    return (
          <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            overlayClassName="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0"
            className="relative border-none bg-white w-full max-w-2xl p-12 mt-12 mx-auto rounded border border-gray-300"
        >
            <div>
                <div className="flex items-center justify-center">
                    <Image src="/images/person-map.svg" width={199} height={113} alt="Pessoa entregando"/>
                </div>
                <h2 className="text-lg text-center leading-8 py-5">Onde você quer receber seu pedido?</h2>
                <div className="flex justify-center items-center mx-auto">
                    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
                        <Form className="flex flex-grow w-full m-4 ml-6">
                            <Field name="search" as={SearchInput} placeholder="Buscar endereço e número" />
                        </Form>
                    </Formik>
                </div>
            </div>
        </Modal>
    );
}
