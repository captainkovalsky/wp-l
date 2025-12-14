import { r as registerInstance, h } from './index-745b6bec.js';
import { a as apiFetch } from './fetch-bc141774.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';

const scCustomerEditCss = ":host{display:block;position:relative}.customer-edit{display:grid;gap:0.75em}";
const ScCustomerEditStyle0 = scCustomerEditCss;

const ScCustomerEdit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.customer = undefined;
        this.successUrl = undefined;
        this.loading = undefined;
        this.error = undefined;
    }
    async handleSubmit(e) {
        var _a;
        this.loading = true;
        try {
            const { email, first_name, last_name, phone, billing_matches_shipping, shipping_name, shipping_city, 'tax_identifier.number_type': tax_identifier_number_type, 'tax_identifier.number': tax_identifier_number, shipping_country, shipping_line_1, shipping_line_2, shipping_postal_code, shipping_state, billing_name, billing_city, billing_country, billing_line_1, billing_line_2, billing_postal_code, billing_state, } = await e.target.getFormJson();
            this.customer.billing_address = {
                name: billing_name,
                city: billing_city,
                country: billing_country,
                line_1: billing_line_1,
                line_2: billing_line_2,
                postal_code: billing_postal_code,
                state: billing_state,
            };
            this.customer.shipping_address = {
                name: shipping_name,
                city: shipping_city,
                country: shipping_country,
                line_1: shipping_line_1,
                line_2: shipping_line_2,
                postal_code: shipping_postal_code,
                state: shipping_state,
            };
            await apiFetch({
                path: addQueryArgs(`surecart/v1/customers/${(_a = this.customer) === null || _a === void 0 ? void 0 : _a.id}`, { expand: ['tax_identifier'] }),
                method: 'PATCH',
                data: {
                    email,
                    first_name,
                    last_name,
                    phone,
                    billing_matches_shipping: billing_matches_shipping === true || billing_matches_shipping === 'on',
                    shipping_address: this.customer.shipping_address,
                    billing_address: this.customer.billing_address,
                    ...(tax_identifier_number && tax_identifier_number_type
                        ? {
                            tax_identifier: {
                                number: tax_identifier_number,
                                number_type: tax_identifier_number_type,
                            },
                        }
                        : {}),
                },
            });
            if (this.successUrl) {
                window.location.assign(this.successUrl);
            }
            else {
                this.loading = false;
            }
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (h("sc-dashboard-module", { key: '8606ef528087a27b4339fccc522f35d8b32c5a63', class: "customer-edit", error: this.error }, h("span", { key: '96683a7052c856fa21bc655150ae4512b47096e6', slot: "heading" }, this.heading || wp.i18n.__('Update Billing Details', 'surecart'), ' ', !((_a = this === null || this === void 0 ? void 0 : this.customer) === null || _a === void 0 ? void 0 : _a.live_mode) && (h("sc-tag", { key: 'c1e248a2ff75c7fcaf6561f105033c01053ca52c', type: "warning", size: "small" }, wp.i18n.__('Test', 'surecart')))), h("sc-card", { key: '4a99737ff59e89b518cc1bbd7ce72a9f66740da6' }, h("sc-form", { key: '2de28888c0835d7094a954c3d4f1832ff4b9fdad', onScFormSubmit: e => this.handleSubmit(e) }, h("sc-columns", { key: 'ce430d4f396c9a4d6a09655ea0d7a4e2d2b4388f', style: { '--sc-column-spacing': 'var(--sc-spacing-medium)' } }, h("sc-column", { key: 'c2e44178646de7851ff9ca142a9811de525cc163' }, h("sc-input", { key: '6942f34c67113d29fb27ee93cc81c7179044eccb', label: wp.i18n.__('First Name', 'surecart'), name: "first_name", value: (_b = this.customer) === null || _b === void 0 ? void 0 : _b.first_name })), h("sc-column", { key: '07c8e4392736d1e4a495b8c0483e643ac4dca060' }, h("sc-input", { key: '981f18ba7a121196275f05769bf0595cd357076c', label: wp.i18n.__('Last Name', 'surecart'), name: "last_name", value: (_c = this.customer) === null || _c === void 0 ? void 0 : _c.last_name }))), h("sc-column", { key: '49b7dff6b5987a6af5748e99d1019e3f89c0f472' }, h("sc-phone-input", { key: 'caa30e7f0292a245492d025fca73105aff858c12', label: wp.i18n.__('Phone', 'surecart'), name: "phone", value: (_d = this.customer) === null || _d === void 0 ? void 0 : _d.phone })), h("sc-flex", { key: 'acc36994efd0081c05a08224e41154348729a26c', style: { '--sc-flex-column-gap': 'var(--sc-spacing-medium)' }, flexDirection: "column" }, h("div", { key: 'd55bd14c264a3b7e7eb6d0638986b8f4d843447b' }, h("sc-address", { key: '1e418c6e40af1912d1ca2472c629f1ba4982adfa', label: wp.i18n.__('Shipping Address', 'surecart'), showName: true, address: {
                ...(_e = this.customer) === null || _e === void 0 ? void 0 : _e.shipping_address,
            }, showLine2: true, required: false, names: {
                name: 'shipping_name',
                country: 'shipping_country',
                line_1: 'shipping_line_1',
                line_2: 'shipping_line_2',
                city: 'shipping_city',
                postal_code: 'shipping_postal_code',
                state: 'shipping_state',
            } })), h("div", { key: '0565fba66ad77ca2bc58b26f4dd7c9e490373a3f' }, h("sc-checkbox", { key: 'af6a6652a03f7a0c593f12afa84db92e6228a1d7', name: "billing_matches_shipping", checked: (_f = this.customer) === null || _f === void 0 ? void 0 : _f.billing_matches_shipping, onScChange: e => {
                this.customer = {
                    ...this.customer,
                    billing_matches_shipping: e.target.checked,
                };
            }, value: "on" }, wp.i18n.__('Billing address is same as shipping', 'surecart'))), h("div", { key: '5fc7517e87ec3d3d100e41173749f56509fb3b2a', style: { display: ((_g = this.customer) === null || _g === void 0 ? void 0 : _g.billing_matches_shipping) ? 'none' : 'block' } }, h("sc-address", { key: 'a83c3dbc2cfb72353a7794f28494e9ee6cac3b2c', label: wp.i18n.__('Billing Address', 'surecart'), showName: true, address: {
                ...(_h = this.customer) === null || _h === void 0 ? void 0 : _h.billing_address,
            }, showLine2: true, names: {
                name: 'billing_name',
                country: 'billing_country',
                line_1: 'billing_line_1',
                line_2: 'billing_line_2',
                city: 'billing_city',
                postal_code: 'billing_postal_code',
                state: 'billing_state',
            }, required: true })), h("sc-tax-id-input", { key: 'b11dd8fb3206cb1fa6114a6b4031767753f79d87', show: true, number: (_k = (_j = this.customer) === null || _j === void 0 ? void 0 : _j.tax_identifier) === null || _k === void 0 ? void 0 : _k.number, type: (_m = (_l = this.customer) === null || _l === void 0 ? void 0 : _l.tax_identifier) === null || _m === void 0 ? void 0 : _m.number_type })), h("div", { key: '21b637f20d7721b7bb7412a5aa8352b81430bfe6' }, h("sc-button", { key: 'ed934746c077226fbcbf4e0466c0578c8debbe1e', type: "primary", full: true, submit: true }, wp.i18n.__('Save', 'surecart'))))), this.loading && h("sc-block-ui", { key: '393d859f322b566ff8eb2bfc444e227ffd198f9b', spinner: true })));
    }
};
ScCustomerEdit.style = ScCustomerEditStyle0;

export { ScCustomerEdit as sc_customer_edit };

//# sourceMappingURL=sc-customer-edit.entry.js.map