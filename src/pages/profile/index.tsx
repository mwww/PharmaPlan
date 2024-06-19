import { useState, ChangeEvent, FormEvent } from 'react';
import css from './.module.scss';

interface EditingState {
    personalInfo: boolean;
    address: boolean;
}

interface FormDataState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
}

export default function AccountSettings() {
    const [isEditing, setIsEditing] = useState<EditingState>({
        personalInfo: false,
        address: false
    });

    const [formData, setFormData] = useState<FormDataState>({
        firstName: "Owen",
        lastName: "Siau",
        email: "owen.siau@binus.ac.id",
        phone: "+62 878 3911 9783",
        bio: "CEO and Co-Founder of PharmaPlan",
        country: "Indonesia",
        state: "Tangerang Selatan",
        city: "Alam Sutera",
        postalCode: "15430"
    });

    const handleEditToggle = (section: keyof EditingState) => {
        setIsEditing((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent, section: keyof EditingState) => {
        e.preventDefault();
        handleEditToggle(section);
        // Here you would normally handle form submission, e.g., sending data to a server
    };

    return (
        <div className={css.cont}>
            <h1 className={css.title}>Account Settings</h1>
            <nav className={css.tabs}>
                <button className={css.active}>My Profile</button>
                <button>Billing</button>
                <button>Team Members</button>
                <button>Notifications</button>
                <button>Security</button>
            </nav>
            <div className={css.profile}>
                <div className={css.personalInfo}>
                    <div className={css.header}>
                        <img className={css.avatar} src="/assets/OwenSiau.jpg" alt="Thomas Smith" />
                        <div>
                            <h2 className={css.name}>{formData.firstName} {formData.lastName}</h2>
                            <p className={css.position}>CEO & Co-Founder</p>
                        </div>
                        <button className={css.edit} onClick={() => handleEditToggle('personalInfo')}>
                            {isEditing.personalInfo ? 'Cancel' : 'Edit'}
                        </button>
                    </div>
                    {isEditing.personalInfo ? (
                        <form className={css.info} onSubmit={(e) => handleSubmit(e, 'personalInfo')}>
                            <div className={css.infoItem}>
                                <label className={css.label}>First Name</label>
                                <input
                                    className={css.input}
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Last Name</label>
                                <input
                                    className={css.input}
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Email</label>
                                <input
                                    className={css.input}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Phone</label>
                                <input
                                    className={css.input}
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Bio</label>
                                <textarea
                                    className={css.input}
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className={css.save} type="submit">Save</button>
                        </form>
                    ) : (
                        <div className={css.info}>
                            <div className={css.infoItem}>
                                <label className={css.label}>First Name</label>
                                <p className={css.text}>{formData.firstName}</p>
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Last Name</label>
                                <p className={css.text}>{formData.lastName}</p>
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Email</label>
                                <p className={css.text}>{formData.email}</p>
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Phone</label>
                                <p className={css.text}>{formData.phone}</p>
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Bio</label>
                                <p className={css.text}>{formData.bio}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className={css.address}>
                    <div className={css.header}>
                        <h3 className={css.addressTitle}>Address</h3>
                        <button className={css.edit} onClick={() => handleEditToggle('address')}>
                            {isEditing.address ? 'Cancel' : 'Edit'}
                        </button>
                    </div>
                    {isEditing.address ? (
                        <form className={css.info} onSubmit={(e) => handleSubmit(e, 'address')}>
                            <div className={css.infoItem}>
                                <label className={css.label}>Country</label>
                                <input
                                    className={css.input}
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>State</label>
                                <input
                                    className={css.input}
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>City</label>
                                <input
                                    className={css.input}
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Postal Code</label>
                                <input
                                    className={css.input}
                                    type="text"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className={css.save} type="submit">Save</button>
                        </form>
                    ) : (
                        <div className={css.info}>
                            <div className={css.infoItem}>
                                <label className={css.label}>Country</label>
                                <p className={css.text}>{formData.country}</p>
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>State</label>
                                <p className={css.text}>{formData.state}</p>
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>City</label>
                                <p className={css.text}>{formData.city}</p>
                            </div>
                            <div className={css.infoItem}>
                                <label className={css.label}>Postal Code</label>
                                <p className={css.text}>{formData.postalCode}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
