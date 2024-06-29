import ClassRoom from './0-classroom.js'

export default function initializeRooms() {
    const rooms = []
    const room1 = new ClassRoom(19)
    const room2 = new ClassRoom(24)
    const room3 = new ClassRoom(30)
    rooms.push(room1, room2, room3)
    return rooms
}