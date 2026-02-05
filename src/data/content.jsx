import { PRODUCT_URLS } from "../constants";

/**
 * Per-product editorial content keyed by rank.
 *
 * Kept separate from the structural data so that long-form copy
 * doesn't clutter the config and can be edited independently.
 */

const osmoAnalysis = (
  <>
    <p><strong>The Osmo DashCam is by far the best dash cam on the market.</strong></p>
    <p>
      The first standout feature is the 4K resolution at 60 FPS, allowing you to
      clearly capture number plates even at high speeds and from a distance.
    </p>
    <p>
      Another great benefit is the 170° wide-angle lens, which ensures everything
      around you is recorded. It&#8217;s far more effective than the standard
      120° lenses – a real game-changer.
    </p>
    <p>
      Unlike many other brands that charge extra for a rear camera, the Osmo
      DashCam includes it <strong>for free</strong> in the box.
    </p>
    <p>
      Your safety is significantly increased thanks to enhanced night vision and
      24/7 loop recording. So if anything happens to your car at night, it's all
      captured on video.
    </p>
    <p>
      It also features <strong>parking surveillance</strong> and{" "}
      <strong>motion detection</strong>.
    </p>
    <p>
      Installation is quick and easy – just a few minutes with{" "}
      <strong>no complicated wiring</strong> like other models. It&#8217;s
      compatible with all types of vehicles, including cars, trucks, and
      caravans.
    </p>
    <p>
      The Osmo DashCam is officially recognised by US insurance companies, so if
      you&#8217;re ever in an accident while travelling, your footage is
      immediately valid – no extra paperwork.
    </p>
    <p>
      <strong>
        Best of all: You get a 100% money-back guarantee – so you can try it
        risk-free!
      </strong>
    </p>
  </>
);

const osmoWrapUp = (
  <p>
    The Osmo DashCam is fairly priced for a market-leading dash cam with
    innovative technology and HD visuals. Take advantage of this limited-time
    discount while stocks last. Osmo offers a <b>14-day money-back guarantee</b>{" "}
    and free shipping. The Osmo DashCam was unanimously voted the Best Dash Cam
    of 2026.
  </p>
);

const nextbaseAnalysis = (
  <>
    <p>
      When we chose to shoot in 4K/30p, the resulting footage looked almost
      cinematic in its presentation, with extremely crisp definition and great
      detail, even in poor lighting. This makes it much easier to pinpoint
      registration numbers or pick out hard-to-see elements of an accident.
    </p>
    <p>
      A built-in polarizing filter on the front of the camera can be rotated to
      reduce glare from windscreens, while digital image stabilization is another
      first for the dash cam market and helps smooth out those bumps and shakes
      caused by potholes and poor road surfaces.
    </p>
    <p>
      Like its 522GW sibling, this model can be controlled via your voice with
      Alexa Skills, but it requires the accompanying smartphone app to work,
      which we didn't rate as the best we've tried. Despite new dual 2.4GHz +
      5GHz Wi-Fi, we found that it still had trouble connecting with phones to
      transfer images and video clips.
    </p>
    <p>
      Thankfully, the 3-inch rear touchscreen is crisp, clear and very easy to
      use, while the inclusion of what3words combines well with Nextbase's
      EmergencySOS feature, which you get a year's free subscription for with
      this dash cam.
    </p>
  </>
);

const garminAnalysis = (
  <>
    <p>
      The Garmin Mini 2 is a tiny dash cam that all but disappears behind your
      car's rear view mirror, yet boasts Full HD video with HDR, voice control
      that actually works reliably, a decent smartphone app and a dead-simple
      magnetic mounting system.{" "}
    </p>
    <p>
      Installing the Mini 2 is the same as other members of the Garmin Dash Cam
      family. We found the setup process took just a few minutes with the use of
      Garmin's Drive smartphone app (iOS and Android). The simple but effective
      mounting system comprises a ball-and-socket joint for positioning the
      camera on the metal disc, which connects to the power supply via USB-C and
      is attached to the windshield with an adhesive pad.
    </p>
    <p>
      We found video quality to be good for the size of the camera. It records in
      Full HD, 30fps with HDR and produces footage that is sharp enough to pick
      out key details like registration plates, whatever the ambient light and
      weather conditions. At 140 degrees, the lens' field-of-view isn't the
      widest out there but is more than enough to cover the full width of a road
      from a normal driving position.
    </p>
    <p>
      There's a button for quickly saving a portion of video (or you can rely on
      the g-sensor to automatically detect a collision) and voice controls for
      functions like taking a photo or turning audio recording on and off work
      surprisingly well.
    </p>
  </>
);

const nexarAnalysis = (
  <>
    <p>
      Aimed at those who spend extended periods behind the wheel, the Nexar Pro
      is a dual-cam solution that can record video both inside and outside a
      vehicle. Comprised of two separate camera units connected by a cable, we
      found the setup to be pretty neat, even if it took up a fair bit of screen
      real estate on the windshield.
    </p>
    <p>
      The Nexar app is central to the twin camera experience: it's where you can
      fine-tune settings, generate incident reports and back recorded clips up to
      the cloud (Nexar bundles cloud storage in for free). Other useful tools
      include break-in alerts if someone tries to tamper with your car, as well
      as an emergency SOS that will contact the authorities if a big crash is
      detected.
    </p>
    <p>
      This dash cam doesn't record in 4K, but we found its 1080p video to be
      perfectly serviceable. The external camera fares well even in tricky
      shooting situations, from heavy rain to bright sunshine. There are cheaper
      dash cams out there with fewer features to play with, but if the security
      of your car is a priority, the Nexar Pro is worth adding to the shortlist.
    </p>
  </>
);

const vantrueAnalysis = (
  <>
    <p>
      Neatly designed and relatively compact, the Vantrue E1 is an attractive
      dash cam that's capable of recording 2.5K video at 30fps. It can also
      capture Full HD footage at a smoother 60fps, for additional detail while
      you drive. Results are sharp night and day, with accurate colors and
      acceptable noise levels throughout.
    </p>
    <p>
      The E1's magnetic mount works well, but the lack of sideways adjustments
      limits its use if you can't fit it centrally. If you can, you'll find its
      160-degree angle captures a wide view of what's ahead. A tiny 1.54-inch
      screen offers a handy preview when installing, but the smartphone app is
      more useful for reviewing footage and adjusting settings.
    </p>
    <p>
      Driver assistance is left to your vehicle, but the E1 still has a solid set
      of features. That includes GPS tracking, Wi-Fi connectivity, and a remote
      for wirelessly saving footage.
    </p>
  </>
);

const whatIsDashcamContent = (
  <span className="hgKElc">
    Dash Cam is a{" "}
    <b><a href={PRODUCT_URLS.osmoDashCamSecondary}>video camera</a></b>{" "}
    mounted usually on the dashboard of a vehicle and used to continuously
    record activity through the vehicle's windshield. Typically, police
    dashcams are used to gather evidence during traffic stops.
  </span>
);

/**
 * Lookup analysis JSX by product rank.
 */
export const ANALYSIS_BY_RANK = {
  1: osmoAnalysis,
  2: nextbaseAnalysis,
  3: garminAnalysis,
  4: nexarAnalysis,
  5: vantrueAnalysis,
};

export const WRAP_UP_BY_RANK = {
  1: osmoWrapUp,
};

export { whatIsDashcamContent };
