import React from "react";

const PresidentPage = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apostle Steve – President & Founder
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            President & Founder of RevivalHub Global Center
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="text-center mb-8">
            <img
              src="/president1.jpg" // replace with actual image path
              alt="Apostle Steve"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">Apostle Steve</h2>
            <p className="text-orange-600 font-medium">
              President & Founder of RevivalHub Global Center
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold mb-2">
                About Apostle Steve
              </h3>
              <p>
                Apostle Steve is the President and Founder of RevivalHub Global
                Center, an apostolic, prophetic, and equipping ministry with a
                global vision to raise a generation of kingdom-minded believers,
                revivalists, and reformers. He is a man marked by a deep passion
                for God’s presence, a strong prayer mantle, and an unshakable
                commitment to advancing the Kingdom of God in this generation.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">
                A Prophetic and Apostolic Voice
              </h3>
              <p>
                Apostle Steve carries a strong apostolic grace to establish,
                govern, and equip. His ministry is characterized by prophetic
                insight, revelatory teaching, and a passion to see believers
                walk in maturity and power. He is known for training
                intercessors, prophetic voices, and kingdom leaders who impact
                their families, churches, and nations. His heart is to see a
                generation burning with revival fire, walking in purity, and
                manifesting the supernatural power of God.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">A Global Mandate</h3>
              <p>
                The vision of RevivalHub Global Center is not limited to one
                city or nation. Apostle Steve’s assignment is to the nations,
                and through teaching, prophetic ministry, and leadership
                training, he continues to impact lives across borders. His
                messages carry a strong emphasis on prayer, consecration,
                revival, and covenant with God.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">
                Equipping for the End-Time Harvest
              </h3>
              <p>
                At the core of Apostle Steve’s ministry is the burden for the
                end-time harvest. He believes the Church must be equipped and
                aligned to God’s agenda in this kairos season. Through apostolic
                impartation, prophetic training, and revival gatherings, he is
                committed to raising a company of believers who will carry the
                glory of God into every sphere of influence—ministry, family,
                business, government, and society.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">
                A Spiritual Father and Mentor
              </h3>
              <p>
                Beyond the pulpit, Apostle Steve is a spiritual father and
                mentor to many sons and daughters in the faith. He is devoted to
                building lives, nurturing callings, and guiding others into
                spiritual maturity. His leadership is marked by humility, love,
                and an unyielding passion for the will of God.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Legacy and Impact</h3>
              <p>
                Through RevivalHub Global Center, Apostle Steve is pioneering a
                movement of revival, restoration, and reformation. His desire is
                to see the Body of Christ walk in unity, power, and the fullness
                of their kingdom identity. His life and ministry stand as a
                testimony of God’s grace, power, and faithfulness.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentPage;
