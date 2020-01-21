const { expect } = require('chai')
// const { listModels } = require('sequelize-test-helpers')
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkUniqueIndex,
    checkPropertyExists
} = require('sequelize-test-helpers')

const ProfileModel = require('../models/profile');
const OffsiteModel = require('../models/offsite');
const CalendarModel = require('../models/calendar');

//==This lets me know mocha is working, istalled right and ref'd correctly==//
var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('models/profile', () => {
    const Profile = ProfileModel(sequelize, dataTypes)
    const profile = new Profile()

    checkModelName(Profile)('Profile')

    context('properties', () => {
        ;[
            'first_Name',
            'last_Name',
            'email',
            'personal',
            'enterprise',
            'company',
            'street_address',
            'city',
            'state',
            'zip',
            'work_phone',
            'cell_phone',
            'username',
            'password'
        ].forEach(
            checkPropertyExists(profile)
        )
    })

})


describe('models/offsite', () => {
    const Offsite = OffsiteModel(sequelize, dataTypes)
    const offsite = new Offsite()

    checkModelName(Offsite)('Offsite')

    context('properties', () => {
        ;[
            'idOffsite',
            'location',
            'date',
            'time',
            'company',
            'contact name',
            'contact email',
            'contact phone',
            'address',
            'patient name',
            'patient email',
            'patient insurance co',
            'patient grp number',
            'patient member number',
            'patient phone',
            'patient q1',
            'patient q2',
            'patient q3',
            'patient q4',
            'patient q5'
        ].forEach(
            checkPropertyExists(offsite)
        )
    })

})




describe('models/calendar', () => {
    const Calendar = CalendarModel(sequelize, dataTypes)
    const calendar = new Calendar()

    checkModelName(Calendar)('Calendar')

    context('properties', () => {
        ;[
            'idCalendar',
            'Date',
            'company',
            'first_Name',
            'last_Name',
            'email',
            'phone',
            'location',
            'address',
            'City',
            'State',
            'Zip',
            'Start Time',
            'End Time',
            'num_avail'
        ].forEach(
            checkPropertyExists(calendar)
        )
    })

})