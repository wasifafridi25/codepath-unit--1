import React from "react";
import Event from "./Event";

export default function Calendar() {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event={"Starbucks"} color={"lightbrown"} />
            <Event event={"Burger King"} color={"brown"} />
            <td></td>
            <td></td>
            <Event event={"Morning Walk"} color={"green"} />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event={"Meeting with Client"} color={"blue"} />
            <td></td>
            <Event event={"KFC"} color={"red"} />
            <td></td>
            <Event event={"Yoga Class"} color={"purple"} />
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event={"Bart"} color={"blue"} />
            <Event event={"Coding"} color={"lightbrown"} />
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <Event event={"Brunch with Friends"} color={"orange"} />
            <Event event={"Museum"} color={"ash"} />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event={"Starbucks"} color={"lightbrown"} />
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <Event event={"Lunch with Family"} color={"yellow"} />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event={"Bart"} color={"blue"} />
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <Event event={"Shopping"} color={"purple"} />
            <td></td>
            <Event event={"Product Demo"} color={"blue"} />
            <td></td>
            <td></td>
            <Event event={"Meeting with Friends"} color={"orange"} />
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <Event event={"Team Standup"} color={"green"} />
            <td></td>
            <Event event={"Coffee Break"} color={"lightbrown"} />
            <td></td>
            <td></td>
            <Event event={"Review"} color={"lightbrown"} />
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <Event event={"Gym"} color={"green"} />
            <td></td>
            <Event event={"Movie"} color={"purple"} />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event={"Fancy dinner 🎩"} color={"lightbrown"} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
